import React from "react";
import { useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      style={{
        padding: "8px 16px",
        backgroundColor: pending ? "gray" : "blue",
        color: "white",
        border: "none",
        cursor: pending ? "not-allowed" : "pointer",
      }}
    >
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}

export default function Custom_hook() {
  async function handleSubmit(formData) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Form submitted successfully!");
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>useFormStatus in React</h1>

      <form action={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          required
          style={{ padding: "8px", marginRight: "10px" }}
        />

        <SubmitButton />
      </form>
    </div>
  );
}