import React from "react";
import { useReducer } from "react";

const initialState = 0;
const reduce = (state, action) => {
  if (action.type === "increa") {
    return state + 1;
  }
  if (action.type === "decrea") {
    return state - 1;
  }
  return state;
};
const UesReducerDemo = () => {
  const [state, dispatch] = useReducer(reduce, initialState);

  return (
    <div>
      <h1>{state}</h1>
      <button
        onClick={() => {
          dispatch({ type: "increa" });
        }}
      >
        Increament
      </button>
      <button onClick={() => dispatch({ type: "decrea" })}>Decreament</button>
      <div>
        <label htmlFor="">Name</label>
        <input type="text" />
        <button onClick={() => dispatch({ type: "fname" })}>submit</button>
      </div>
    </div>
  );
};

export default UesReducerDemo;
