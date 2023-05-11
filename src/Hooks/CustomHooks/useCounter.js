import { useState } from "react";
const useCounter = () => {
  const [Count, setCount] = useState(0);

  const IncrementCount = () => {
    setCount(Count + 1);
  };
  const DecrementCount = () => {
    if (Count > 0) {
      setCount(Count - 1);
    }
  };
  const ResetCount = () => {
    setCount(0);
  };

  return [IncrementCount, DecrementCount, ResetCount, Count];
};

export default useCounter;
