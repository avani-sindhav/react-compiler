import { useEffect, memo } from "react";

// let globalCOunt = 0;

function Counter({ count, setCount, id }) {
  // "use memo";
  useEffect(() => {
    console.log(`Counter UseEffect call for ${id}`);
  });

  // globalCOunt++;
  // console.log(globalCOunt);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>Increment- {count}</button>
    </>
  );
}

// export default Counter;

const memoCounter = memo(Counter);
export default memoCounter;
