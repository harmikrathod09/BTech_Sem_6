import React, { useState, useTransition } from "react";

function List({ query }) {
  const items = [];

  for (let i = 0; i < 20000; i++) {
    items.push(
      <div key={i}>
        {query} Item {i}
      </div>
    );
  }

  return <div>{items}</div>;
}

export default function UseTransition_demo() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const value = e.target.value;
    setInput(value);

    startTransition(() => {
      setQuery(value);
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>useTransition Demo</h1>

      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Type to search..."
        style={{ padding: "8px", width: "300px" }}
      />

      {isPending && <p style={{ color: "red" }}>Updating list...</p>}

      <List query={query} />
    </div>
  );
}