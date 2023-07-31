import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

function Footer({darkMode}) {
  return (
    <footer id="footer" 
                  className={` ${darkMode?'bg-black bg-gradient-to-l from-gray-950':'bg-white'} z-30 mt-10 relative `}>
      <div className="footer-container mx-auto max-w-[94%] px-4 py-6 lg:py-8 mt-2">
        <TopFooter darkMode={darkMode} />
        <hr className={` ${darkMode?'border-gray-800':'border-gray-200'} my-5  sm:mx-auto  lg:my-8`} />
        <BottomFooter darkMode={darkMode} />
      </div>
    </footer>
  );
}

export default React.memo(Footer);