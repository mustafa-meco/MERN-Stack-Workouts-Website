import React from "react";
import { useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext();

  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const workout = { title, load, reps };

    const response = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setTitle("");
      setLoad("");
      setReps("");
      setError(null);
      console.log("Workout added successfully!", json);
      dispatch({
        type: "CREATE_WORKOUT",
        payload: json,
      });
    }
  };

  return (
    <form action="" className="create" onSubmit={handleSubmit}>
      <h3>Add a New Workout</h3>

      <label htmlFor="">Excersize Title:</label>
      <input
        type="text"
        required
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <label htmlFor="">Load (in kg):</label>
      <input
        type="number"
        required
        value={load}
        onChange={(e) => setLoad(e.target.value)}
      />

      <label htmlFor="">Reps:</label>
      <input
        type="number"
        required
        value={reps}
        onChange={(e) => setReps(e.target.value)}
      />

      <button type="submit">Add Workout</button>
      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default WorkoutForm;
