const express = require("express");
const {
  createWorkout,
  getAllWorkouts,
  getOneWorkout,
  deleteWorkout,
  updateWorkout,
} = require("../controllers/workoutController");

const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

// require auth for all workout routes
router.use(requireAuth);

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
