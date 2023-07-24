import React from "react";
import CopyrightDisclaimer from "./CopyrightDisclaimer";
import Icons from "./Icons";
import { navLinkClickSFXAudio } from "../../utils/sfx"; 

function BottomFooter( {darkMode} ) {
  return (
    <div className="footer-bottom flex flex-wrap gap-2 items-center justify-around pb-2">
      <CopyrightDisclaimer
        year="2023"
        author="Rami Al-Saadi™"
        link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
        darkMode={darkMode}
        sfx={navLinkClickSFXAudio}
      />
      <Icons  darkMode={darkMode} sfx={navLinkClickSFXAudio} />
    </div>
  );
}

export default React.memo(BottomFooter);