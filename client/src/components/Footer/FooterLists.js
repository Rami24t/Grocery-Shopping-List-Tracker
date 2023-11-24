import { memo, useContext } from "react";
import { FooterList } from "./components";
import { LiaReact } from "react-icons/lia";
import { BiLogoTailwindCss } from "react-icons/bi";
import { Context } from "../Context/Context";
import { footerListsText } from "../../data/text";

function FooterLists({ darkMode }) {
  const { language } = useContext(Context).state.settings;
  const { RESOURCES, FOLLOW_ME } = footerListsText;

  const footerListsStyle = "flex gap-20 justify-around items-start";

  const resourcesTitle = RESOURCES[language];
  const resourcesLinks = [
    { text: "Rami", url: "https://www.github.com/rami24t" },
    { text: "React", url: "https://react.dev/", Logo: LiaReact },
    {
      text: "Tailwind CSS",
      url: "https://tailwindcss.com/",
      Logo: BiLogoTailwindCss,
    },
  ];
  const followMeTitle = FOLLOW_ME[language];
  const followMeLinks = [
    { text: "Github", url: "https://www.github.com/rami24t" },
    {
      text: "LinkedIn",
      url: "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
    },
  ];

  return (
    <div className={footerListsStyle}>
      <FooterList
        darkMode={darkMode}
        title={resourcesTitle}
        links={resourcesLinks}
      />
      <FooterList
        darkMode={darkMode}
        title={followMeTitle}
        links={followMeLinks}
      />
      {/* <FooterList title="Legal" links={[{ text: "Privacy Policy" }, { text: "Terms & Conditions" }]} /> */}
    </div>
  );
}

export default memo(FooterLists);
