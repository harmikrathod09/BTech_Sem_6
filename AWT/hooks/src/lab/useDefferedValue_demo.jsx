import React, { useState, useDeferredValue, useMemo } from "react";

export default function UseDeferredValueDemo() {
  const [query, setQuery] = useState("");

  // Defer the query value
  const deferredQuery = useDeferredValue(query);

  // Simulate expensive filtering
  const filteredList = useMemo(() => {
    console.log("Filtering list...");
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);
    return items.filter((item) =>
      item.toLowerCase().includes(deferredQuery.toLowerCase())
    );
  }, [deferredQuery]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useDeferredValue Demo</h2>

      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "8px", width: "300px" }}
      />

      <p>
        {query !== deferredQuery && "Updating results..."}
      </p>

      <ul>
        {filteredList.slice(0, 20).map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}