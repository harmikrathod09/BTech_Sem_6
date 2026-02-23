import React, { useState, useDebugValue } from "react";

function useCounter(initialValue) {
  const [count, setCount] = useState(initialValue);

  useDebugValue(count);

  return { count, setCount };
}

export default function UseDebug_demo() {
  const { count, setCount } = useCounter(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
