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
import UseDeferredValueDemo from './lab/useDefferedValue_demo'
import UseImperativeHandle from './lab/useImperativeHandle'
import UseLayoutEffect_Demo from './lab/useLayoutEffect_demo'
// import UseMemo_demo from './lab/useMemo_demo'
import UseOptimisticDemo from './lab/useOptimistic_demo'
import UseReduce_demo from './lab/useReduce_demo'
import UseRef_demo from './lab/useRef_demo'
import UseSyncExternalStore_demo from './lab/useSyncExternalStore_demo'
import UseTransition_demo from './lab/useTransition_demo'
import Custom_hook from './lab/custom_hook'

function App() {

  return (
    <>
      <Custom_hook/>
    </>
  )
}

export default App
