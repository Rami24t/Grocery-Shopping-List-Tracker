import React from "react";
import CopyrightDisclaimer from "./CopyrightDisclaimer";
import Icons from "./Icons";
import { navLinkClickSFXAudio } from "../../utils/sfx"; 

function BottomFooter( {dark} ) {
  return (
    <div className="footer-bottom flex flex-wrap gap-2 items-center justify-around pb-2">
      <CopyrightDisclaimer
        year="2023"
        author="Rami Al-Saadi™"
        link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
        dark={dark}
        sfx={navLinkClickSFXAudio}
      />
      <Icons  dark={dark} sfx={navLinkClickSFXAudio} />
    </div>
  );
}

export default React.memo(BottomFooter);