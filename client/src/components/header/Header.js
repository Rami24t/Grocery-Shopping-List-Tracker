import React from "react";
import { ShoppingBagSvg, ShoppingBagFillSvg } from "./ShoppingBagSvgs";

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
            <p className="mt-1.5 text-sm text-gray-500">
              Let's do this! {Math.random() * 100 > 50 ? "🧉" : "🚀"}{" "}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:items-center">
            <div
              title="Items 📝"
              className="min-w-[90px] mx-auto opacity-95 relative rounded-lg bg-gray-700 bg-opacity-60 px-5 py-2.5 text-sm font-medium text-white transition flex items-center justify-center    "
            >
              {haves < items ? (
                <ShoppingBagSvg
                  className={`${
                    dark ? "text-orange-100 " : "text-gray-800"
                  } inline w-4 h-4 `}
                />
              ) : (
                <ShoppingBagFillSvg
                  className={`${
                    dark ? "text-green-300" : "text-gray-800"
                  } inline w-4 h-4 `}
                />
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
                  {
                    <ShoppingBagFillSvg
                      className={`${
                        dark ? "text-white " : "text-gray-800"
                      } inline w-1 h-1 `}
                    />
                  }
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
                  {
                    <ShoppingBagSvg
                      className={`${
                        dark ? "text-white " : "text-gray-800"
                      } inline w-1 h-1 `}
                    />
                  }
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
