import React from "react";
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
import { slideOutInSFXAudio, navLinkClickSFXAudio, playSFXAudio } from "../../utils/sfx";

const Sidenav = ({
  items,
  setShowAddItem,
  showSideNav,
  setShowSideNav,
  dark,
}) => {
  function hideMobileSidenav(e) {
    e.stopPropagation();
    // e.preventDefault();
    e.target.parentNode.style.pointerEvents = "none";
    setTimeout(() => {
      e.target.parentNode.style.pointerEvents = "";
    }, 500);
    setShowSideNav(false);
    playSFXAudio(slideOutInSFXAudio)
    setTimeout(() => {
      slideOutInSFXAudio.pause();
      slideOutInSFXAudio.currentTime = 3.5;
    }, 600);
  }
  function handleClick() {
    playSFXAudio(navLinkClickSFXAudio);
  }

  const sideNavLinks = [
    { title: "Home", href: "#app", Icon: SvgHome },
    {
      title: "Add Item",
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
      title: "Settings",
      href: "#settings",
      Icon: SvgSettings,
      LIBadge: ProBadge,
      margin: "ml-10",
    },
  ];

  return (
    <nav
      id="sidenav"
      className={`text-center sm:text-start z-40 sm:z-30 overflow-hidden rounded-lg bg-gray-950 bg-opacity-90 border-r-0 fixed sm:absolute sm:w-52 md:sticky top-0 sm:top-24 left-0 w-64 py-8 sm:py-4 transition-transform sm:translate-x-0
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
              dark={dark}
            />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Sidenav);
