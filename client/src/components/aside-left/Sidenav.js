import React from "react";
import { BsHouseHeartFill } from "react-icons/bs";

const Sidenav = ({
  items,
  setShowAddItem,
  showSideNav,
  setShowSideNav,
  dark,
}) => {
  function handleClick() {
    setShowSideNav(false);
  }
  return (
    <nav
      onClick={handleClick}
      id="sidenav"
      className={`text-center sm:text-start z-40 sm:z-30 bg-gray-950 bg-opacity-75 sm:bg-gray-900 border-r-0 fixed sm:absolute sm:w-52  md:sticky top-0 overflow-hidden sm:top-24  left-0 w-64 py-8 sm:py-4 transition-transform sm:translate-x-0
${
  showSideNav
    ? "w-full rounded-lg translate-x-0 ease-out duration-300"
    : "-translate-x-full duration-200"
}`}
      aria-label="Sidebar"
    >
      <div className="h-full px-3 pb-4">
        <ul className="space-y-2 font-medium">
          <li>
            <a
              href="#app"
              className={`flex items-center p-2 ${
                dark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-100"
              } rounded-lg `}
            >
              <span className="text-2xl text-gray-400">
                <BsHouseHeartFill />
              </span>
              <span className="flex-1  sm:ml-3 whitespace-nowrap">Home</span>
            </a>
          </li>
          <li>
            <a
              onClick={() => setShowAddItem(true)}
              href="#new-item"
              className={` ${
                dark
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100 "
              } flex items-center p-2  rounded-lg   `}
            >
              <SvgAddItem />
              <span className="flex-1 sm:ml-3 ml-6 whitespace-nowrap">Add Item</span>
              <span
                className={` ${
                  dark
                    ? "bg-blue-900 text-blue-300"
                    : "text-blue-800 bg-blue-100 "
                } sm:ml-3 mr-1 inline-flex items-center justify-center w-3 h-3 p-2 text-sm font-medium rounded-full `}
              >
                {items}
              </span>
            </a>
          </li>
          <li>
            <a
              href="#filter"
              onClick={() => setShowAddItem(true)}
              className={` ${
                dark
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100"
              } flex items-center p-2  rounded-lg   "`}
            >
              <SvgBagFilled />
              <span className="flex-1  sm:ml-3  -ml-1 whitespace-nowrap">
                Search List
              </span>
            </a>
          </li>
          <li>
            <a
              href="#list"
              className={` ${
                dark
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100"
              } flex items-center p-2  rounded-lg   "`}
            >
              <SvgEditList />
              <span className="flex-1 ml-2  sm:ml-3 whitespace-nowrap">Edit List</span>
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className={` ${
                dark
                  ? "text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100"
              } flex items-center p-2  rounded-lg   "`}
            >
              <SvgPerson />
              <span className="flex-1 ml-2  sm:ml-3  whitespace-nowrap">About</span>
            </a>
          </li>
          <li>
            <a
              href="#7"
              className={` ${
                dark
                  ? " text-white hover:bg-gray-700"
                  : "text-gray-900 hover:bg-gray-100"
              } flex items-end p-2 rounded-lg  `}
            >
              <SvgSettings />
              <span className="flex-1 ml-10  sm:ml-3 whitespace-nowrap">Settings</span>
              <span
                className={` ${
                  dark
                    ? "bg-gray-700 hover:bg-gray-800 text-gray-300"
                    : "text-gray-800 bg-gray-200 "
                } inline-flex items-center  sm:ml-3 justify-center px-2 pb-[1px] text-sm font-medium rounded-full `}
              >
                Pro
              </span>
            </a>
          </li>
          {/* <li>
            <a
              href="#4"
              className={` ${dark?'text-white hover:bg-gray-700':'text-gray-900 hover:bg-gray-100'} flex items-center p-2  rounded-lg   "`}
            >
              <SvgPipeArrowRight />
              <span className="flex-1 ml-3 whitespace-nowrap">Display</span>
              <span className="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full bg-gray-700 text-gray-300">
                Pro
              </span>
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );

  function SvgEditList() {
    return (
      <svg
        aria-hidden="true"
        className={` ${
          dark
            ? "text-gray-400 group-hover:text-white"
            : "text-gray-500  group-hover:text-gray-900"
        } flex-shrink-0 w-6 h-6 transition duration-75 `}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
      </svg>
    );
  }

  function SvgAddItem() {
    return (
      <svg
        aria-hidden="true"
        className={` ${
          dark
            ? "text-gray-400 group-hover:text-white"
            : "text-gray-500  group-hover:text-gray-900"
        } flex-shrink-0 w-6 h-6 transition duration-75 `}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
        <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
      </svg>
    );
  }

  function SvgBagFilled() {
    return (
      <svg
        aria-hidden="true"
        className={` ${
          dark
            ? "text-gray-400 group-hover:text-white"
            : "text-gray-500  group-hover:text-gray-900"
        } flex-shrink-0 w-6 h-6 transition duration-75 `}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  function SvgSettings() {
    return (
      <svg
        aria-hidden="true"
        className={` ${
          dark
            ? "text-gray-400 group-hover:text-white"
            : "text-gray-500  group-hover:text-gray-900"
        } flex-shrink-0 w-6 h-6 transition duration-75 `}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  function SvgPerson() {
    return (
      <svg
        aria-hidden="true"
        className={` ${
          dark
            ? "text-gray-400 group-hover:text-white"
            : "text-gray-500  group-hover:text-gray-900"
        } flex-shrink-0 w-6 h-6 transition duration-75 `}
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
          clipRule="evenodd"
        ></path>
      </svg>
    );
  }

  // function SvgPipeArrowRight() {
  //   return (
  //     <svg
  //       aria-hidden="true"
  //       className={` ${
  //         dark
  //           ? "text-gray-400 group-hover:text-white"
  //           : "text-gray-500  group-hover:text-gray-900"
  //       } flex-shrink-0 w-6 h-6 transition duration-75  `}
  //       fill="currentColor"
  //       viewBox="0 0 20 20"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
  //         clipRule="evenodd"
  //       ></path>
  //     </svg>
  //   );
  // }
};

export default React.memo(Sidenav);