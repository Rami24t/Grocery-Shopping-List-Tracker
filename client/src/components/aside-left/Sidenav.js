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

const Sidenav = ({
  items,
  setShowAddItem,
  showSideNav,
  setShowSideNav,
  dark,
}) => {
  function hideMobileSidenav() {
    setShowSideNav(false);
  }
  return (
    <nav
      id="sidenav"
      className={`text-center rounded-lg sm:text-start z-40 sm:z-30 bg-gray-950 bg-opacity-80 sm:bg-gray-950 border-r-0 fixed sm:absolute sm:w-52  md:sticky top-0 overflow-hidden sm:top-24  left-0 w-64 py-8 sm:py-4 transition-transform sm:translate-x-0
${
  showSideNav
    ? "w-full rounded-lg translate-x-0 ease-out duration-300"
    : "-translate-x-full duration-200"
}`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4">
        <ul className="space-y-2 font-medium"
          onClick={hideMobileSidenav}
        >
          <SidenavLI title="Home" Icon={SvgHome} href="#app" dark={dark} />
          <SidenavLI
            title="Add Item"
            Icon={SvgAddItem}
            href="#new-item"
            onClick={() => setShowAddItem(true)}
            LIBadge={ItemsBadge}
            items={items}
            dark={dark}
            margin="ml-6"
          />
          <SidenavLI
            title="Search List"
            Icon={SvgBagFilled}
            href="#filter"
            dark={dark}
          />
          <SidenavLI
            title="Edit List"
            Icon={SvgEditList}
            href="#list"
            dark={dark}
          />
          <SidenavLI
            title="About"
            Icon={SvgPerson}
            href="#footer"
            dark={dark}
          />
          <SidenavLI
            title="Settings"
            Icon={SvgSettings}
            href="#settings"
            dark={dark}
            LIBadge={ProBadge}
            margin="ml-10"
          />
        </ul>
      </div>
    </nav>
  );
};

export default React.memo(Sidenav);
