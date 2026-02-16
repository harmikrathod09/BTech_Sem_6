import React, { useState } from 'react'

export default function UseStateDemo() {
  const [count, setCount ] = useState(0)
  return (
    <div>
      <h1>Current value of {count}</h1>
      <button onClick={()=>{
        setCount(count+1)
      }}>Increment</button>
    </div>
  )
}
