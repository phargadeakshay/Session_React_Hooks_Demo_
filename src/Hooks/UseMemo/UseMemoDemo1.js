import React, { useState, useMemo } from "react";

const UseMemoDemo1 = () => {
  const [myNum, setMyNum] = useState(0);
  const [show, setShow] = useState(false);

  const increament = () => {
    return setMyNum(myNum + 1);
  };

  const countNumber = (num) => {
    console.log("countNumber ~ num", num,show);
    for (let i = 0; i <= 1000000000; i++) {}
    return num;
  };

  
  const checkData = useMemo(() => {
    return countNumber(myNum);
  }, [myNum]);

  // const checkData = countNumber(myNum)
  return (
    <div className="w-full h-screen  flex items-center justify-center  text-2xl flex-col font-[oswald]">
      <button className="bg-red-600 p-2 rounded-md mx-2" onClick={increament}>Counter</button>
      <p> My new number : {checkData} </p>


      <button className="bg-blue-600 p-2 rounded-md mx-2" onClick={() => setShow(!show)}>{show ? "You clicked BTN" : "Click BTN"}</button>
    </div>
  );
};

export default UseMemoDemo1;