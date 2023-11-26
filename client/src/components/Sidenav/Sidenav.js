import { useContext, memo } from "react";
import {
  SidenavLI,
  SvgAddItem,
  SvgBagFilled,
  SvgEditList,
  SvgHome,
  SvgPerson,
  SvgSettings,
  ItemsBadge,
  LanguageBadge,
} from "./components";
import {
  slideOutInSFXAudio,
  navLinkClickSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context/Context";
import { sidenavText } from "../../data/text";

const Sidenav = ({
  items,
  setShowAddItem,
  showSideNav,
  setShowSideNav,
  darkMode,
}) => {
  const { state, dispatch } = useContext(Context);
  const { sound, language } = state.settings;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });
  // const languageText = state.LANGUAGES[language]; responsibility moved to data/text.js
  const text = {
    titles: [
      sidenavText.HOME[language],
      sidenavText.ADD_ITEMS[language],
      sidenavText.SEARCH_LIST[language],
      sidenavText.EDIT_LIST[language],
      sidenavText.CONTACT[language],
      sidenavText.LANGUAGE[language],
      sidenavText.SKIP[language],
    ],
    language: sidenavText.LANGUAGES[language],
  };

  function hideMobileSidenav(e) {
    e.stopPropagation();
    // e.preventDefault();
    e.target.parentNode.style.pointerEvents = "none";
    setTimeout(() => {
      e.target.parentNode.style.pointerEvents = "";
    }, 500);
    setShowSideNav(false);
    if (sound) {
      playSFXAudio(slideOutInSFXAudio);
      setTimeout(() => {
        slideOutInSFXAudio.pause();
        slideOutInSFXAudio.currentTime = 3.6;
      }, 600);
    }
  }
  function handleClick(e) {
    setInfo(
      e.target.nodeName === "A"
        ? e.target.children[1].innerText
        : e.target.parentNode.nodeName === "A"
        ? e.target.parentNode.children[1].innerText
        : null
    );
    sound && playSFXAudio(navLinkClickSFXAudio);
  }

  const sideNavLinks = [
    {
      title: text.titles[6],
      href: "#main-div-header",
      styles:
        "absolute left-50 transform -translate-x-[100vw] focus:translate-x-0",
    },
    { title: text.titles[0], href: "#app", Icon: SvgHome },
    {
      title: text.titles[1],
      href: "#add-item-button",
      Icon: SvgAddItem,
      LIBadge: ItemsBadge,
      items: items,
      margin: "ml-6",
      onClick: () => {
        setShowAddItem(true);
        setTimeout(() => {
          document.getElementById("new-item").focus();
        }, 400);
      },
    },
    { title: text.titles[2], href: "#filter", Icon: SvgBagFilled },
    { title: text.titles[3], href: "#list", Icon: SvgEditList },
    { title: text.titles[4], href: "#footer", Icon: SvgPerson },
    {
      title: text.titles[5],
      href: "#Lang=" + text.language,
      Icon: SvgSettings,
      LIBadge: LanguageBadge,
      languageText: text.language,
      margin: "ml-10",
      onClick: () => {
        dispatch({
          type: "CHANGE_LANGUAGE",
        });
      },
    },
  ];

  return (
    <nav
      id="sidenav"
      className={`text-center sm:text-start z-40 sm:z-30 overflow-hidden rounded-lg ${
        darkMode
          ? "bg-black bg-gradient-to-r from-gray-950"
          : "bg-gradient-to-l from-yellow-100 bg-red-50"
      }  bg-opacity-90 border-r-0 fixed sm:absolute sm:w-52 md:sticky top-0 sm:top-24 left-0 w-64 py-8 sm:py-4 transition-transform sm:translate-x-0
${
  showSideNav
    ? "w-full translate-x-0 ease-out duration-500"
    : "-translate-x-full duration-300"
}`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3" onClick={hideMobileSidenav}>
        <ul className="space-y-2 font-medium" onClick={handleClick}>
          {sideNavLinks.map((link, i) => (
            <SidenavLI
              key={i}
              title={link.title}
              href={link.href}
              Icon={link.Icon}
              LIBadge={link.LIBadge}
              items={link.items}
              badgeText={link.languageText}
              styles={link.styles}
              margin={link.margin}
              onClick={link.onClick}
              darkMode={darkMode}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default memo(Sidenav);
