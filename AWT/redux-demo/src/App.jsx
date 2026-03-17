import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseStateDemo from './lab/usestate_demo'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UseEffectDemo from './lab/useeffect_demo'
import A_props from './lab/passwith_props'
import A_usecontext from './lab/usecontext_demo'
import ParentComponent from './lab/useCallback_demo'
import ReduxDemo from './lab/redux_demo'
import { Provider } from "react-redux";
import { store } from "./lab/store";

function App() {

  return (
    <>
      <Provider store={store}>
      <ReduxDemo/>
      </Provider>
    </>
  )
}

export default App