const express = require("express");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ message: "GET all workouts" });
});

// GET one workout
router.get("/:id", (req, res) => {
  res.json({ message: "GET one workout" });
});

// POST one workout
router.post("/", (req, res) => {
  res.json({ message: "POST one workout" });
});

// DELETE one workout
router.delete("/:id", (req, res) => {
  res.json({ message: "DELETE one workout" });
});

// UPDATE one workout
router.patch("/:id", (req, res) => {
  res.json({ message: "UPDATE one workout" });
});

module.exports = router;
