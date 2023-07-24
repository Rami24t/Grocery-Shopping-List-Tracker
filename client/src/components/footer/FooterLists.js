import React from "react";
import FooterList from "./FooterList";
import { LiaReact } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";

function FooterLists({ darkMode }) {
  return (
    <div className="footer-lists flex gap-20 justify-around items-start">
      <FooterList
        darkMode={darkMode}
        title="Resources"
        links={[
          { text: "Rami", url: "https://www.github.com/rami24t" },
          {
            text: "Tailwind CSS",
            url: "https://tailwindcss.com/",
            Logo: BiLogoTailwindCss,
          },
          { text: "React", url: "https://react.dev/", Logo: LiaReact },
        ]}
      />
      <FooterList
        darkMode={darkMode}
        title="Follow me"
        links={[
          { text: "Github", url: "https://www.github.com/rami24t" },
          {
            text: "LinkedIn",
            url: "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
          },
        ]}
      />
      {/* <FooterList title="Legal" links={[{ text: "Privacy Policy" }, { text: "Terms & Conditions" }]} /> */}
    </div>
  );
}

export default React.memo(FooterLists);
