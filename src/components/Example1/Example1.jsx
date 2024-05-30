import { useState } from "react";
import Header from "./Header";
import Counter from "./Counter";

export default function Example1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  return (
    <main className="p-5 flex flex-col gap-5">
      <Header />
      <Counter count={count1} setCount={setCount1} id={1} />
      <Counter count={count2} setCount={setCount2} id={2} />
    </main>
  );
}
