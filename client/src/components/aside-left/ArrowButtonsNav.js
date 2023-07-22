import { useEffect, useState } from "react";
import ArrowToIcon from "./ArrowToIcon";
import { toBottomTopSFXAudio, slideOutInSFXAudio } from "../../utils/sfx";

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
      e.target.style.pointerEvents = "none";
      setTimeout(() => {
        e.target.style.pointerEvents = "";
      }, 800);
      toBottomTopSFXAudio.currentTime = 0;
      toBottomTopSFXAudio.play();
      slideOutInSFXAudio.currentTime = 0;
      slideOutInSFXAudio.play();
      setTimeout(() => {
        slideOutInSFXAudio.pause();
        slideOutInSFXAudio.currentTime = 0;
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
