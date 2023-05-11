import React from 'react'
import { useState } from 'react'
import useCounter from "./useCounter"
import ScreenComponent from './ScreenComponent'
const CustomHookDemo = () => {
    // const [Count, setCount] = useState(0)
    const [IncrementCount,DecrementCount,ResetCount,Count] = useCounter(0)

  return (
    <div className='w-full h-screen flex items-center justify-center text-gray-200 text-2xl flex-col font-[oswald]'>
        <div className='text-3xl'>{Count}</div>
       <div>
       <button onClick={IncrementCount} className='bg-red-600 p-2 rounded-md my-3'>Increment</button>
        <button onClick={DecrementCount} className='bg-blue-600 p-2 rounded-md mx-2'>Decrement</button>
        <button onClick={ResetCount} className='bg-red-600 p-2 rounded-md'>Reset</button>
       </div>
       <ScreenComponent/>
    </div>
  )
}

export default CustomHookDemo