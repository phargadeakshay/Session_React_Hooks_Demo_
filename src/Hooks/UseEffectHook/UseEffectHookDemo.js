import React from 'react'
import { useState, useEffect } from "react";
const UseEffectHookDemo = () => {
    const [count, setCount] = useState(2);
    const [calculation, setCalculation] = useState(0);
  
    useEffect(() => {
      setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here
  
    return (
      <div className='w-full h-screen  flex items-center justify-center  text-2xl flex-col font-[oswald]'>
        <p>Count: {count}</p>
        <button className='bg-blue-600 p-2 rounded-md mx-2' onClick={() => setCount((c) => c + 1)}>Increament</button>
        <p>Calculation: {calculation}</p>
      </div>
    );
}

export default UseEffectHookDemo