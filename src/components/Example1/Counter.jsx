import { useEffect, memo } from "react";

// let globalCount = 0;

function Counter({ count, setCount, id }) {
  // "use no memo";
  useEffect(() => {
    console.log(`Counter UseEffect call for ${id}`);
  });

  // globalCount++;
  // console.log(globalCount);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment- {count}</button>
    </>
  );
}

export default Counter;

// const memoCounter = memo(Counter);
// export default memoCounter;
