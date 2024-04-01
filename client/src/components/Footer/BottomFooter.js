import { memo, useContext } from "react";
import { Context } from "../Context/Context";
import { bottomFooterText } from "../../data/text";

import { CopyrightDisclaimer, Icons } from "./components";
import { navLinkClickSFXAudio } from "../../assets/sfx";

function BottomFooter({ darkMode }) {
  const { language } = useContext(Context).state.settings;
  const copyright = {
    year: bottomFooterText.YEAR[language],
    author: bottomFooterText.AUTHOR[language],
    rights: bottomFooterText.RIGHTS[language],
  };
  return (
    <div
      style={language === 2 ? { fontFamily: "Amiri" } : {}}
      className={`footer-bottom pt-1.5 pb-2 rounded-sm flex flex-col-reverse sm:flex-row flex-wrap gap-4 items-center justify-around
    ${darkMode ? "" : "bg-gradient-to-r to-yellow-200"}
    `}
    >
      <CopyrightDisclaimer
        year="2023"
        author={copyright.author}
        rights={copyright.rights}
        link="https://rami-al-saadi.vercel.app/"
        darkMode={darkMode}
        sfx={navLinkClickSFXAudio}
      />
      <Icons darkMode={darkMode} sfx={navLinkClickSFXAudio} />
    </div>
  );
}

export default memo(BottomFooter);
