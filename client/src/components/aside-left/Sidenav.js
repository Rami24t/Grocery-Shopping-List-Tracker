import { useContext, memo } from "react";
import SidenavLI from "./SidenavLI";
import {
  SvgAddItem,
  SvgBagFilled,
  SvgEditList,
  SvgHome,
  SvgPerson,
  SvgSettings,
} from "./SidenavSvgs";
import { ItemsBadge, ProBadge } from "./LIBadges";
import {
  slideOutInSFXAudio,
  navLinkClickSFXAudio,
  playSFXAudio,
} from "../../assets/sfx";
import { Context } from "../Context";

const Sidenav = ({
  items,
  setShowAddItem,
  showSideNav,
  setShowSideNav,
  darkMode,
}) => {
  const { state, dispatch } = useContext(Context);
  const sound = state.settings.sound;
  const setInfo = (info) => dispatch({ type: "SET_INFO", payload: info });

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
      e.target.nodeName === "LI" || e.target.nodeName === "A"
        ? e.target.innerText
        : e.target.parentNode.nodeName === "LI" ||
          e.target.parentNode.nodeName === "A"
        ? e.target.parentNode.innerText
        : null
    );
    sound && playSFXAudio(navLinkClickSFXAudio);
  }

  const sideNavLinks = [
    { title: "Home", href: "#app", Icon: SvgHome },
    {
      title: "Add Items",
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
    { title: "Search List", href: "#filter", Icon: SvgBagFilled },
    { title: "Edit List", href: "#list", Icon: SvgEditList },
    { title: "About", href: "#footer", Icon: SvgPerson },
    {
      title: "options",
      href: "#language-changed",
      Icon: SvgSettings,
      LIBadge: ProBadge,
      margin: "ml-10",
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
