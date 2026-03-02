import React, { useRef, useState, useEffect } from "react";

export default function UseRef_demo() {
  const inputRef = useRef(null);
  const clickCountRef = useRef(0);
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleClick = () => {
    clickCountRef.current += 1;
    alert(`Button clicked ${clickCountRef.current} times`);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>useRef Example</h1>

      <input
        ref={inputRef}
        type="text"
        placeholder="Type something..."
      />

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleClick}>
          Click (doesn't re-render)
        </button>

        <button
          onClick={() => setRenderCount(renderCount + 1)}
          style={{ marginLeft: "10px" }}
        >
          Force Re-render
        </button>
      </div>

      <p style={{ marginTop: "20px" }}>
        Render count: {renderCount}
      </p>
    </div>
  );
}