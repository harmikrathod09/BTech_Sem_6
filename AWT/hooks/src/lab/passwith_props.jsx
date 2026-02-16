import React from 'react'

function C_props(props) {
  return (
    <div>
      <h2>Message from A: {props.message}</h2>
    </div>
  )
}

function B_props(props) {
  return (
    <div>
      <C_props message={props.message} />
    </div>
  )
}

export default function A_props(props) {

  const message = "Hello from Component A";

  return (
    <div>
      <h1>Component A</h1>
      <B_props message={message} />
    </div>
  )
}
