import React from "react";
import FooterIconLink from "./FooterIconLink";
import SendEmailIconLink from "./SendEmailIconLink";
import { BsYoutube, BsLinkedin } from "react-icons/bs";
import { SvgGithub } from "./SvgGithub";

function Icons() {
  return <div className="footer-icons flex mt-4 space-x-6 sm:justify-center sm:mt-0">
    <SendEmailIconLink />
    <FooterIconLink
      icon={BsLinkedin}
      url="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
      srText="linkedIn account" />
    {/* <FooterIconLink icon={SvgFB} url="https://www.facebook.com/XtremeSale" srText="Facebook page" />
          <FooterIconLink icon={SvgInstagram} url="https://www.instagram.com/ramissaadi/" srText="Instagram page" /> */}
    <FooterIconLink
      icon={SvgGithub}
      url="https://github.com/Rami24t"
      srText="GitHub account" />
    <FooterIconLink
      icon={BsYoutube}
      url="https://www.youtube.com/@ramial-saadi3113/videos"
      srText="YouTube channel" />
  </div>;
}

export default Icons;