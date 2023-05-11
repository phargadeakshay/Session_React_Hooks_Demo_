import React, { createContext } from "react";
import { ComB } from "./ComB";
const EmpData = createContext();
export const ComA = () => {
  return (
    <EmpData.Provider
      value={{ Name: "akshay", lname: "phargade", age: 25 }}
    >
      <ComB />
    </EmpData.Provider>
  );
};
export default ComA;
export { EmpData };
