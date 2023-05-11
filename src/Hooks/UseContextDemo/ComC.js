import React, { useContext } from "react";
import { EmpData } from "./ComA";

export const ComC = () => {
  const Data = useContext(EmpData);
  return (
    <h1 className="w-full h-screen  flex items-center justify-center  text-2xl flex-col font-[oswald]">
      Hello I am  {Data.Name} {Data.lname} and my age is {Data.age}
    </h1>
  );
};
export default ComC;
