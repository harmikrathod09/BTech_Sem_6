import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateDemo from './lab/usestate_demo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffectDemo from './lab/useeffect_demo'
import A_props from './lab/passwith_props'
import A_usecontext from './lab/usecontext_demo'
import UseActionState_demo from './lab/useActionState_demo'
import UseCallback_demo from './lab/useCallback_demo'
import UseDebug_demo from './lab/useDebug_demo'
import Without_opti_demo from './lab/without_opti_demo_prime'

function App() {

  return (
    <>
      <Without_opti_demo/>
    </>
  )
}

export default App
