import { useRef, useEffect, useState } from 'react';

const UseRefHookDemoDOM = () => {
  const inputElement = useRef();

  const focusInput = () => {
    inputElement.current.style.color="red"
    console.log(inputElement.current.style )
  };

  return (
    <div className='w-full h-screen  flex items-center justify-center  text-2xl flex-col font-[oswald]'>
      <input type="text" ref={inputElement} />
      <button onClick={focusInput}>Change Color</button>
    </div>
  );
}

export default UseRefHookDemoDOM