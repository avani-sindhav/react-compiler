import { useEffect, memo } from "react";

function Header() {
  useEffect(() => {
    console.log("Header useEffect call ");
  });

  return <p>Header Component</p>;
}

export default Header;

// const memoHeader = memo(Header);
// export default memoHeader;
