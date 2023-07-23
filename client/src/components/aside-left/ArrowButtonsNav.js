import { useEffect, useState } from "react";
import ArrowToIcon from "./ArrowToIcon";
import { toBottomTopSFXAudio, slideOutInSFXAudio, playSFXAudio } from "../../utils/sfx";

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
  const handleClick = (e) => {
    try {
      window.scrollTo({
        top: e.target.href === "#footer" ? window.document.body.clientHeight : 0,
        behavior: "smooth"
      });
      e.target.style.pointerEvents = "none";
      setTimeout(() => {
        e.target.style.pointerEvents = "";
      }, 800);
      playSFXAudio(toBottomTopSFXAudio, slideOutInSFXAudio);
      setTimeout(() => {
        slideOutInSFXAudio.pause();
      }, 550);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      {TO_ARROWS.map((arrow, index) => (
        <ArrowToIcon key={index} {...arrow} handleClick={handleClick} />
      ))}
    </>
  );
}

export default ArrowButtonsNav;
