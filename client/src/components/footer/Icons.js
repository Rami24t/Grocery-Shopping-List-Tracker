import React, {useContext} from "react";
import FooterIconLink from "./FooterIconLink";
import SendEmailIconLink from "./SendEmailIconLink";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import { SvgGithub } from "./Svgs";
import { navLinkClickSFXAudio, playSFXAudio } from "../../assets/sfx";
import { Context } from "../Context";

function Icons({ darkMode}) {
  const { state } = useContext(Context);  
  
  const handleClick = () => {
    state.settings.sound && playSFXAudio(navLinkClickSFXAudio);
  }

  return <div className="footer-icons flex flex-wrap mt-4 space-x-6 sm:justify-center sm:mt-0">
    <SendEmailIconLink  darkMode={darkMode}  />
    <FooterIconLink
      Icon={BsLinkedin}
      url="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
      srText="linkedIn account"
      darkMode={darkMode}
      handleClick={handleClick}
    />
    {/* <FooterIconLink icon={SvgFB} url="https://www.facebook.com/XtremeSale" srText="Facebook page" />
          <FooterIconLink icon={SvgInstagram} url="https://www.instagram.com/ramissaadi/" srText="Instagram page" /> */}
    <FooterIconLink
      Icon={SvgGithub}
      url="https://github.com/Rami24t"
      srText="GitHub account" 
      darkMode={darkMode}
      handleClick={handleClick}
      />
    <FooterIconLink
      Icon={BsYoutube}
      url="https://www.youtube.com/@ramial-saadi3113/videos"
      srText="YouTube channel" 
      darkMode={darkMode}
      handleClick={handleClick}
      />
  </div>;
}

export default React.memo(Icons);