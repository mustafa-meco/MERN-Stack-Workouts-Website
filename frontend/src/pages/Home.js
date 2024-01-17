import { useEffect, useState } from "react";
import { useWorkoutsContext } from "../hooks/useWorkoutsContext";
import { useAuthContext } from "../hooks/useAuthContext";

// components
import WorkoutDetails from "../components/WorkoutDetails";
import WorkoutForm from "../components/WorkoutForm";

const Home = () => {
  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch("/api/workouts", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();

      if (response.ok) {
        dispatch({
          type: "SET_WORKOUTS",
          payload: data,
        });
      } else {
        setError(data.error);
      }
    };
    if (user) {
      fetchWorkouts();
    } else {
      setError("You must be logged in to view workouts!");
    }
  }, [dispatch, user]);
  return (
    <div className="home">
      <div className="workouts">
        {!error &&
          workouts &&
          workouts.map((workout) => (
            <WorkoutDetails workout={workout} key={workout._id} />
          ))}
      </div>

      <WorkoutForm />
    </div>
  );
};

export default Home;
