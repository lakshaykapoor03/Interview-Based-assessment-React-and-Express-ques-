import React, { useState } from 'react'

const Counter = () => {

    const [counter, setCounter]= useState(0)
  return (
    <div>
        <button onClick={()=> setCounter( counter+1)}>Increase Counter</button>
        <span>{counter}</span>
        {counter===0?<button disabled onClick={()=> setCounter(counter-1)}>Decrease Counter</button>: <button onClick={()=> setCounter(counter-1)}>Decrease Counter</button>}
    </div>
  )
}

export default Counter