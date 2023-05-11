import React from 'react'
import useScreen from './useScreen'
const ScreenComponent = () => {
    const ScreenSize = useScreen()
  return (
    <div>
        
    <div>ScreenComponent</div>
    <h1>We are in {ScreenSize} Screen</h1>
    </div>
  )
}

export default ScreenComponent