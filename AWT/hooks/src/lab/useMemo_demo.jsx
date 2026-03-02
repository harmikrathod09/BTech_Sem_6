import React, { useState, useMemo } from "react";

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function sumPrimes(n) {
  let sum = 0;
  let count = 0;
  let num = 2;

  while (count < n) {
    if (isPrime(num)) {
      sum += num;
      count++;
    }
    num++;
  }

  return sum;
}

export function SumPrimesMemo() {
  const [counter, setCounter] = useState(0);

  const total = useMemo(() => sumPrimes(5000), []);

  return (
    <div>
      <h2>Sum of first 5000 primes: {total}</h2>
      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter: {counter}
      </button>
      <p>Notice: Total is NOT recalculated when counter changes.</p>
    </div>
  );
}

