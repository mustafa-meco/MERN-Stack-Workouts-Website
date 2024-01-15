import { createContext, useReducer, useEffect } from "react";

export const WorkoutsContext = createContext(null);

export const workoutsReducer = (state, action) => {
  switch (action.type) {
    case "SET_WORKOUTS":
      return {
        workouts: action.payload,
      };
    case "CREATE_WORKOUT":
      return {
        workouts: [action.payload, ...state.workouts],
      };
    default:
      return state;
  }
};

export const WorkoutsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(workoutsReducer, {
    workouts: null,
  });

  useEffect(() => {
    dispatch({
      type: "SET_WORKOUTS",
      payload: [{}, {}],
    });
  }, []); // Empty array means this effect runs once on mount

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};
