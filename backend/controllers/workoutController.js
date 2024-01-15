const Workout = require("../models/workoutModel");
const mongoose = require("mongoose");

// GET all workouts
const getAllWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET one workout
const getOneWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const workout = await Workout.findById(id);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// create a workout
const createWorkout = async (req, res) => {
  try {
    const { title, reps, load } = req.body;
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a workout
const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const workout = await Workout.findByIdAndDelete(id);
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.status(200).json(workout);
  } catch (err) {
    res.status(404).json({ error: err.message });
  }
};

// update a workout
const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(404).json({ error: "Workout not found" });
    }

    const { title, reps, load } = req.body;
    const workout = await Workout.findByIdAndUpdate(
      id,
      { title, reps, load },
      { new: true }
    );
    if (!workout) {
      return res.status(404).json({ error: "Workout not found" });
    }
    res.json(workout);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllWorkouts,
  getOneWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout,
};
