import React, { useEffect, useState } from "react";

export default function Header() {
  useEffect(() => {
    console.log("Header useEffect call ");
  });

  return <p>Header Component</p>;
}
