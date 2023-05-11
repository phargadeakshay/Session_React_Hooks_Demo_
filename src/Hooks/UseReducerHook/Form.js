// import React, { useState } from 'react';
// import axios from 'axios';

// const baseURL = "http://localhost:7002/upload";

// function Form() {
//   const [file, setFile] = useState(null);

//   const handleFileInput = (event) => {
//     setFile(event.target.files[0]);
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const formData = new FormData();
//     formData.append('user_file', file);

//     try {
//       const response = await axios.post(baseURL, formData);
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="file" onChange={handleFileInput} />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// export default Form;



import React, { useReducer } from 'react';

const initialState = {
  name: '',
  email: '',
  password: ''
};

function reducer(state, action) {
  switch (action.type) {
    case 'change':
      return { ...state, [action.field]: action.value };
    case 'reset':
      return initialState;
    default:
      throw new Error();
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function handleChange(e) {
    dispatch({ type: 'change', field: e.target.name, value: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(state);
    dispatch({ type: 'reset' });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={state.name} onChange={handleChange} />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={state.email} onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" value={state.password} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
export default Form;