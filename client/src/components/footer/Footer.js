import React from "react";
import TopFooter from "./TopFooter";
import BottomFooter from "./BottomFooter";

function Footer({dark}) {
  return (
    <footer id="footer" 
                  className={` ${dark?'bg-gray-900':'bg-white'} z-30 mt-10 relative `}>
      <div className="footer-container mx-auto max-w-[94%] px-4 py-6 lg:py-8 mt-2">
        <TopFooter dark={dark} />
        <hr className={` ${dark?'border-gray-700':'border-gray-200'} my-5  sm:mx-auto  lg:my-8`} />
        <BottomFooter dark={dark} />
      </div>
    </footer>
  );
}

export default React.memo(Footer);