import React from "react";
import CopyrightDisclaimer from "./CopyrightDisclaimer";
import Icons from "./Icons";

export function BottomFooter() {
  return (
    <div className="footer-bottom flex flex-wrap gap-2 items-center justify-around pb-2">
      <CopyrightDisclaimer
        year="2023"
        author="Rami Al-Saadi™"
        link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
      />
      <Icons />
    </div>
  );
}
