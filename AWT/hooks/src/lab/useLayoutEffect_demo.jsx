import React, { useLayoutEffect } from "react";
import UseStateDemo from "./usestate_demo";

export default function UseLayoutEffectDemo() {
  useLayoutEffect(() => {
    console.log("Component Mounted (useLayoutEffect)");

    const intervalId = setInterval(() => {
      console.log("Hello World");
    }, 1000);

    // Cleanup function
    return () => {
      console.log("Component Unmounted (cleanup)");
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useLayoutEffect Demo</h2>
      <UseStateDemo />
    </div>
  );
}