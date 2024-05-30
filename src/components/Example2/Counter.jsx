import { useEffect } from "react";

function Counter({ count, setCount, id }) {
  useEffect(() => {
    console.log(`Counter UseEffect call for ${id}`);
  });

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment- {count}</button>
    </>
  );
}

export default Counter;
