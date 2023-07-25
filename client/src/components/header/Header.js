import React from "react";
import InfoWidget from "./InfoWidget";
import Hero from "./Hero";
import quote from "../../utils/randomQuote";

function Header({ list, needs, haves, darkMode, setDarkMode }) {
  return (
    <header className={`app-header z-40 sticky bg-inherit w-full ${darkMode?'':'bg-gray-50'}`}>
      <div className="app-header-container mx-auto max-w-screen-xl px-2 py-4 sm:px-3 sm:py-6 lg:px-8 sm:flex sm:items-center sm:justify-between">
        <Hero title="Grocery Shopping List 🛒" darkMode={darkMode} subtitle={quote} />
        <InfoWidget needs={needs} haves={haves} darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </header>
  );
}

export default React.memo(Header);
