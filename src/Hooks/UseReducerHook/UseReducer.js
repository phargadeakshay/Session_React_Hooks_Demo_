import React, { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  number: "",
  city: "",
  showData: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "update_input":
      return { ...state, [action.inputName]: action.inputValue };
    case "show_data":
      return { ...state, showData: true };
    default:
      return state;
  }
}

function UseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (event) => {
    dispatch({
      type: "update_input",
      inputName: event.target.name,
      inputValue: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({ type: "show_data" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" onChange={handleInputChange} />
      <input type="email" name="email" onChange={handleInputChange} />
      <input type="text" name="number" onChange={handleInputChange} />
      <input type="text" name="city" onChange={handleInputChange} />
      <button type="submit">Submit</button>
      {state.showData && (
        <>
          <p>Name: {state.name}</p>
          <p>Email: {state.email}</p>
          <p>Number: {state.number}</p>
          <p>City: {state.city}</p>
        </>
      )}
    </form>
  );
}

export default UseReducer;
