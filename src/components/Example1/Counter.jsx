import React, { useEffect } from "react";

export default function Counter({ count, setCount, id }) {
  useEffect(() => {
    console.log(`Counter UseEffect call for ${id}`);
  });
  return (
    <button onClick={() => setCount(count + 1)}>Increment- {count}</button>
  );
}
