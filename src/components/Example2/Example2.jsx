import { useState, useCallback } from "react";
import Counter from "./Counter";
import NamesList from "./NamesList";

export default function Example2() {
  const [count, setCount] = useState(0);
  const [names] = useState([
    "Avani",
    "Pooja",
    "Ravi",
    "Dharti",
    "Bhavini",
    "Hatim",
    "Saifuddin",
    "Dhruvi",
    "Vipul",
  ]);

  // const sortNames = useCallback((namesArray) => {
  //   console.log(`Sorting names`, Math.random());
  //   return namesArray.sort();
  // }, []);

  const sortNames = (namesArray) => {
    console.log(`Sorting names`, Math.random());
    return namesArray.sort();
  };

  return (
    <main className="p-5 flex flex-col gap-5">
      <Counter count={count} setCount={setCount} id={1} />
      <NamesList names={names} sortFunc={sortNames} />
    </main>
  );
}
