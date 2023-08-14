import React from "react";
import Company from "./Company";
import FooterLists from "./FooterLists";
import { navLinkClickSFXAudio } from "../../assets/sfx";
import logoSvg from "../../assets/logo/logo.svg";

function TopFooter( {darkMode} ) {
  return <div className={`pr-4 pt-6 items-center footer-top flex flex-col md:flex-row flex-wrap gap-2.5 justify-between
  ${darkMode ? "" : "bg-gradient-to-l to-yellow-200"}
  `}>
    <Company
      logo={logoSvg}
      name="Rami Al-Saadi"
      link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/" 
      sfx={navLinkClickSFXAudio}
      darkMode={darkMode} 
      />
    <FooterLists  darkMode={darkMode} />
  </div>;
}

export default React.memo(TopFooter);