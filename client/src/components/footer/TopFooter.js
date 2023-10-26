import { memo, useContext } from "react";
import Company from "./Company";
import FooterLists from "./FooterLists";
import { navLinkClickSFXAudio } from "../../assets/sfx";
import logoSvg from "../../assets/logo/logo.svg";
import { topFooterText } from "../../data/text";
import { Context } from "../Context";

function TopFooter({ darkMode }) {
  const { language } = useContext(Context).state.settings;
  const company = {
    name: topFooterText.COMPANY_NAME[language],
    subtext: topFooterText.SUBTEXT[language],
  };

  return (
    <div
      className={`rounded-sm md:pr-8 pt-6 items-center footer-top flex flex-col md:flex-row flex-wrap gap-2.5 justify-between
  ${darkMode ? "" : "bg-gradient-to-l to-yellow-200"}
  `}
    >
      <Company
        logo={logoSvg}
        name={company.name}
        subtext={company.subtext}
        link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
        sfx={navLinkClickSFXAudio}
        darkMode={darkMode}
        rtl={language === 2}
      />
      <FooterLists darkMode={darkMode} />
    </div>
  );
}

export default memo(TopFooter);
