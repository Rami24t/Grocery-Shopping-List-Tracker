import React from "react";

function Header({ list, needs, haves, dark }) {
  const items = haves + needs;
  const both = needs && haves;

  return (
    <header className="App-header z-40 sticky bg-inherit w-full">
      <div className="mx-auto max-w-screen-xl px-2 py-4 sm:px-3 sm:py-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="text-center sm:text-left">
            <h1
              className={`${
                dark ? "text-white " : "text-gray-900"
              } text-2xl font-bold sm:text-3xl`}
            >
              Grocery Shopping List 🛒
              {/* {list} */}
            </h1>
            <p className="mt-1.5 text-sm text-gray-500">Let's do this! {Math.random()*100>50?'🧉':'🚀'} </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div
            title="Items 📝"
              className="min-w-[90px] mx-auto opacity-95 relative rounded-lg bg-gray-700 bg-opacity-60 px-5 py-2.5 text-sm font-medium text-white transition flex items-center justify-center    "
              //  hover:bg-indigo-700 focus:outline-none focus:ring"
              // "inline-flex items-center justify-center gap-1.5 rounded-lg border text-gray-500 hover:text-gray-700"
            >
              {haves < items ? (
                <svg
                  className={`${
                    dark ? "text-orange-100 " : "text-gray-800"
                  } inline w-4 h-4 `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                  />
                </svg>
              ) : (
                <svg
                  className={`${
                    dark ? "text-green-300 " : "text-gray-800"
                  } inline w-4 h-4 `}
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
              )}
              <span className="ml-1">&nbsp; 📋 </span>
              {items && both ? (
                <div
                  title="Total Items"
                  className={` ${
                    dark ? "border-gray-800" : "border-white"
                  } absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-300 bg-blue-800 border-2 rounded-full -bottom-2 -left-1.5
                  } `}
                >
                  {items || 0} <span className="sr-only">items</span>
                </div>
              ) : null}
              {haves ? (
                <div
                  title="Haves"
                  className={` ${
                    dark ? "border-gray-800" : "border-white"
                  } absolute inline-flex items-center justify-center animate-bounce w-7 h-7 text-xs font-bold text-white bg-green-700 border-2 rounded-full ${
                    !needs ? "-top-2 -right-2" : "-top-2 -left-2"
                  } `}
                >
                  {haves || 0} <span className="sr-only">haves</span>
                  <svg
                    className={`${
                      dark ? "text-white " : "text-gray-800"
                    } inline w-1 h-1 `}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 20"
                  >
                    <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                  </svg>
                </div>
              ) : null}
              {items && both ? (
                <div
                  title="Completion Percentage"
                  className={` ${
                    dark ? "border-gray-800" : "border-white"
                  } absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-gray-300 bg-teal-700 border-2 rounded-full -bottom-2 -right-1.5
                  } `}
                >
                  {Math.round(100 * (haves / items)) || 0}
                  <span className="text-[10px] font-bold">%</span>
                </div>
              ) : null}
              {needs ? (
                <div
                  title="Needs"
                  className={` ${
                    dark ? "border-gray-800" : "border-white"
                  } absolute inline-flex items-center justify-center animate-pulse w-7 h-7 text-xs font-bold text-white bg-orange-800 border-2 rounded-full  ${
                    needs ? "-top-2 -right-2" : "-top-2 right-4"
                  }`}
                >
                  {needs || 0} <span className="sr-only">needs</span>
                  <svg
                    className={`${
                      dark ? "text-white " : "text-gray-800"
                    } inline w-1 h-1 `}
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                    />
                  </svg>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default React.memo(Header);