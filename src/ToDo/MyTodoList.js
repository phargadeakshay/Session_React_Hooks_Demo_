import React, { useState, useEffect } from "react";
import "./TodoStyle.css";

const MyTodoList = () => {
  const [inputdata, setInputData] = useState("");
  const [items, setItems] = useState([]);
  const baseURL = "https://todoendpoints.onrender.com/getalltodolist";
  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = async () => {
    try {
      const res = await fetch(`${baseURL}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const itemdata = await res.json();
      setItems(itemdata);
    } catch (error) {
      console.error("Error adding data: ", error);
    }
  };

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <div>
            <p className="headingtitle headtop">Add Your List Here😊</p>
          </div>
          <div className="addItems">
            <input
              type="text"
              placeholder="Add Task"
              className="form-control"
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
            />
          </div>

          <div className="showItems">
            {items.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.taskid}>
                  <h3>{curElem.taskname}</h3>
                  <div className="todo-btn"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyTodoList;
