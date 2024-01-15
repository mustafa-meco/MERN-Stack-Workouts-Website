const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET all workouts
router.get("/", getAllWorkouts);

// GET one workout
router.get("/:id", getOneWorkout);

// POST one workout
router.post("/", createWorkout);

// DELETE one workout
router.delete("/:id", deleteWorkout);

// UPDATE one workout
router.patch("/:id", updateWorkout);

module.exports = router;
