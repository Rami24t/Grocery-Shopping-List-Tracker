import React from "react";

function CopyrightDisclaimer({
  year = "2023",
  author = "Rami Al-Saadi™",
  link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/",
  dark,
}) {
  return (
    <span className={`copyright-disclaimer mt-1 text-sm  sm:text-center ${dark?"text-gray-500":"text-gray-500"}`}>
      {`© ${year} `}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className={` ${dark?"text-gray-500  hover:text-gray-400":"text-gray-500"} hover:underline`}  
      >
        {author}
      </a>
      .&nbsp; All Rights Reserved.
    </span>
  );
}

export default React.memo(CopyrightDisclaimer);