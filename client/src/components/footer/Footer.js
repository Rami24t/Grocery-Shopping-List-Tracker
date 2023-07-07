import React from "react";
import { TopFooter } from "./TopFooter";
import { BottomFooter } from "./BottomFooter";

function Footer() {

  return (
    <footer id="footer" className="z-30 relative bg-white dark:bg-gray-900">
      <div className="footer-container mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <TopFooter />
        <hr className="my-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <BottomFooter />
      </div>
    </footer>
  );  
  
}

export default Footer;
