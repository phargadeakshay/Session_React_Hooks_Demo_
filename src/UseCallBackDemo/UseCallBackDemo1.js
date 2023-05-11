import { useState,useCallback } from "react";
import CallbackChild1 from "./CallbackChild1";


function UseCallBackDemo1() {
  const [count, setCount] = useState(0);
  const [todoData, settodoData] = useState([]);

  const handleClick = () => {
    setCount(count + 1);
  };

  // const toDoFunc = () => {
  //   settodoData([...todoData, "new Entry"]);
  // };

  const toDoFunc = useCallback(() => {
    settodoData([...todoData, "new Entry"]);
  }, [todoData]);

  return (
    <div className="flex flex-col items-center justify-center bg-[#055C9D] h-screen text-white">
      <div>
        <p>Count: {count}</p>
        <button onClick={handleClick} className="bg-red-600 p-2 rounded-md my-3">Increment</button>
      </div>
      <CallbackChild1 todoData={todoData} toDoFunc={toDoFunc} />
    </div>
  );
}
export default UseCallBackDemo1;
