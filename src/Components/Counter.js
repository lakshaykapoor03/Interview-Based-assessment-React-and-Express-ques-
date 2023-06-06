import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter]= useState(0)
  return (
    <>
    <h1> Question 12 -  A simple counter app using React</h1>
    <div className="counter-container">
      
        <button className="counter-btn" onClick={()=> setCounter( counter+1)}>Increase Counter</button>
        <span className="counter-number">{counter}</span>
        {counter===0?<button className="counter-btn" disabled onClick={()=> setCounter(counter-1)}>Decrease Counter</button>: <button className="counter-btn" onClick={()=> setCounter(counter-1)}>Decrease Counter</button>}
    </div>
    </>
  )
}

export default Counter