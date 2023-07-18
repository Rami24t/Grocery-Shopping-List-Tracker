import React from "react";
import InfoWidget from "./InfoWidget";
import Hero from "./Hero";

function Header({ list, needs, haves, dark }) {

  return (
    <header className="app-header z-40 sticky bg-inherit w-full">
      <div className="app-header-container mx-auto max-w-screen-xl px-2 py-4 sm:px-3 sm:py-6 lg:px-8 sm:flex sm:items-center sm:justify-between">
        <Hero dark={dark} />
        <InfoWidget
          needs={needs}
          haves={haves}
          dark={dark}
        />
      </div>
    </header>
  );
}

export default React.memo(Header);
