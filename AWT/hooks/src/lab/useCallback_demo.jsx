import React, { useState, useCallback } from "react";

export default function UseCallback_demo() {
  const [count, setCount] = useState(0);

  const showMessage = useCallback(() => {
    alert("Hello from useCallback!");
  }, []);

  return (
    <div>
      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increase Count
      </button>

      <button onClick={showMessage}>
        Show Message
      </button>
    </div>
  );
}

