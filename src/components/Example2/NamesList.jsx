import { memo, useEffect, useMemo } from "react";

function NamesList({ names, sortFunc }) {
  useEffect(() => {
    console.log("NameList UseEffect ");
  });

  // const sortedNames = useMemo(() => sortFunc(names), [name, sortFunc]);

  const sortedNames = sortFunc(names);
  return sortedNames.map((name) => {
    return <div>{name}</div>;
  });
}

export default NamesList;

// const memoNamesList = memo(NamesList);
// export default memoNamesList;
