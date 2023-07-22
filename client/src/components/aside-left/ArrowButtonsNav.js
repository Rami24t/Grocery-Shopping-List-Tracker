import { useEffect, useState } from "react";
import ArrowToIcon from "./ArrowToIcon";

function ArrowButtonsNav({ dark }) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = (event) => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const TO_ARROWS = [
    {
      toBottom: false,
      dark,
      shown: scrollY > window.innerHeight,
    },
    {
      toBottom: true,
      dark,
      shown: scrollY <window.document.body.clientHeight - 2 * window.innerHeight && scrollY > 10,
    }
  ]

  return (
    <>
      {TO_ARROWS.map((arrow, index) => (
        <ArrowToIcon key={index} {...arrow} />
      ))}
    </>
  );
}

export default ArrowButtonsNav;
