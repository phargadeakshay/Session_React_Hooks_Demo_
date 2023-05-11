import { useRef, useEffect, useState } from 'react';

const UseRefHookDemo = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <div className='w-full h-screen  flex items-center justify-center  text-2xl flex-col font-[oswald]'>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </div>
  );
}

export default UseRefHookDemo