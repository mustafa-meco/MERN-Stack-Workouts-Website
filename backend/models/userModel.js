const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

// static signup method
userSchema.statics.signup = async function (email, password) {
  const exists = await this.findOne({ email });

  if (exists) {
    throw Error("User already exists");
  }

  // mypassword123 => 123456

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user = await this.create({ email, password: hash });

  return user;
};

const User = mongoose.model("User", userSchema);

module.exports = User;
