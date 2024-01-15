const express = require("express");
const Workout = require("../models/workoutModel");

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
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try {
    const workout = await Workout.create({ title, reps, load });
    res.status(201).json(workout);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
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
