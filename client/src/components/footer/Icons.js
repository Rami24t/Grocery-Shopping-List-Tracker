import { useContext, memo } from "react";
import FooterIconLink from "./FooterIconLink";
import SendEmailIconLink from "./SendEmailIconLink";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import { SvgGithub } from "./Svgs";
import { navLinkClickSFXAudio, playSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";
import { iconsText as text } from "../../data/text";

function Icons({ darkMode }) {
  const { state } = useContext(Context);
  const { language } = state.settings;

  const handleClick = () => {
    state.settings.sound && playSFXAudio(navLinkClickSFXAudio);
  };

  return (
    <div className="footer-icons flex flex-wrap mt-4 space-x-6 sm:justify-center sm:mt-0">
      <SendEmailIconLink title={text.EMAIL[language]} darkMode={darkMode} />
      <FooterIconLink
        Icon={BsLinkedin}
        url="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
        title={`${text.VISIT_MY[language]} ${text.LINKEDIN[language]}`}
        darkMode={darkMode}
        handleClick={handleClick}
      />
      {/* <FooterIconLink icon={SvgFB} url="https://www.facebook.com/XtremeSale" title="Facebook page" />
          <FooterIconLink icon={SvgInstagram} url="https://www.instagram.com/ramissaadi/" title="Instagram page" /> */}
      <FooterIconLink
        Icon={SvgGithub}
        url="https://github.com/Rami24t"
        title={`${text.VISIT_MY[language]} ${text.GITHUB[language]}`}
        darkMode={darkMode}
        handleClick={handleClick}
      />
      <FooterIconLink
        Icon={BsYoutube}
        url="https://www.youtube.com/@ramial-saadi3113/videos"
        title={`${text.VISIT_MY[language]} ${text.YOUTUBE[language]}`}
        darkMode={darkMode}
        handleClick={handleClick}
      />
    </div>
  );
}

export default memo(Icons);
