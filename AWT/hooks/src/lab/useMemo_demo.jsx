import React, { useState, useMemo } from "react";

export default function UseMemo_demo() {
  const [count, setCount] = useState(0);

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  function sumOfPrimes(n) {
    let total = 0;
    let number = 2;
    let found = 0;

    while (found < n) {
      if (isPrime(number)) {
        total += number;
        found++;
      }
      number++;
    }

    return total;
  }

  const primeSum = useMemo(() => {
    console.time("Prime Calculation");
    const result = sumOfPrimes(5000);
    console.timeEnd("Prime Calculation");
    return result;
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>useMemo Demo (First 5000 Prime Sum)</h2>

      <p><strong>Prime Sum:</strong> {primeSum}</p>

      <button onClick={() => setCount(count + 1)}>
        Re-render Component ({count})
      </button>
    </div>
  );
}