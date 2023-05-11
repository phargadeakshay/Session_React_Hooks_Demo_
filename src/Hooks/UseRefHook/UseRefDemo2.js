import { useRef, useEffect, useState } from 'react';

const UseRefDemo2=() =>{
  const [showComponent, setShowComponent] = useState(false);
  const countRef = useRef(0);

  const handleButtonClick = () => {
    countRef.current += 1;
    console.log(countRef.current)
  }
  useEffect(() => {
    if (countRef.current >= 5) {
      setShowComponent(true);
    }
  }, [countRef]);


  return (
    <div>
      <button onClick={handleButtonClick}>Click me</button>
      {showComponent && <div>This component only renders after 5 clicks</div>}
    </div>
  );
}
export default UseRefDemo2

// it create mutable variable which will not re-render the components
// 2. to access the DOM  Elements directly
