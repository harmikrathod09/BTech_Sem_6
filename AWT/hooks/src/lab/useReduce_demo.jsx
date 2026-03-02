import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return initialState;

    default:
      return state;
  }
}

export default function UseReduce_demo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useReducer Counter</h1>
      <h2>{state.count}</h2>

      <button onClick={() => dispatch({ type: "increment" })}>
        Increment
      </button>

      <button onClick={() => dispatch({ type: "decrement" })} style={{ marginLeft: "10px" }}>
        Decrement
      </button>

      <button onClick={() => dispatch({ type: "reset" })} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </div>
  );
}