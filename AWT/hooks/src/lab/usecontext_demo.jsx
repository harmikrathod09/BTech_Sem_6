import React, { createContext, useContext } from 'react'

const MessageContext = createContext();

function C_usecontext() {
  const message = useContext(MessageContext);

  return (
    <div>
      <h2>Message from A: {message}</h2>
    </div>
  )
}

function B_usecontext() {
  return (
    <div>
      <C_usecontext />
    </div>
  )
}

export default function A_usecontext() {

  const message = "Hello from Component A using Context";

  return (
    <div>
      <h1>Component A</h1>

      <MessageContext.Provider value={message}>
        <B_usecontext />
      </MessageContext.Provider>

    </div>
  )
}
