import React, {
  useRef,
  useImperativeHandle,
  forwardRef,
} from "react";

// Child Component
const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  // Expose specific methods to parent
  useImperativeHandle(ref, () => ({
    focus() {
      inputRef.current.focus();
    },
    clear() {
      inputRef.current.value = "";
    },
    getValue() {
      return inputRef.current.value;
    },
  }));

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Type something..."
      style={{ padding: "8px", marginRight: "10px" }}
    />
  );
});

// Parent Component
export default function UseImperativeHandle() {
  const inputRef = useRef(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useImperativeHandle Demo</h2>

      <CustomInput ref={inputRef} />

      <div style={{ marginTop: "10px" }}>
        <button onClick={() => inputRef.current.focus()}>
          Focus
        </button>

        <button onClick={() => inputRef.current.clear()}>
          Clear
        </button>

        <button onClick={() => alert(inputRef.current.getValue())}>
          Get Value
        </button>
      </div>
    </div>
  );
}