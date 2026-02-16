import React, { useEffect } from 'react'
import UseStateDemo from './usestate_demo'

export default function UseEffectDemo() {
    useEffect(()=>{
        setInterval(()=>{
            console.log("Hello World")
        },1000)
    },[])
  return (
    <div>
        <UseStateDemo/>
    </div>
  )
}
