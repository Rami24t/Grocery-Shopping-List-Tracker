import React from "react";
import FooterList from "./FooterList";

function FooterLists( {dark} ) {
  return <div className="footer-lists flex gap-20 justify-around items-start">
    <FooterList
     dark={dark} 
      title="Resources"
      links={[
        { text: "Rami", url: "https://www.github.com/rami24t" },
        { text: "Tailwind CSS", url: "https://tailwindcss.com/" },
        { text: "React", url: "https://react.dev/" },
      ]} />
    <FooterList
     dark={dark} 
      title="Follow me"
      links={[
        { text: "Github", url: "https://www.github.com/rami24t" },
        {
          text: "LinkedIn",
          url: "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
        },
      ]} />
    {/* <FooterList title="Legal" links={[{ text: "Privacy Policy" }, { text: "Terms & Conditions" }]} /> */}
  </div>;
}

export default React.memo(FooterLists);