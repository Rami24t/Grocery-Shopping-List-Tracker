import React from "react";

function CopyrightDisclaimer({ year = "2023", author = "Rami Al-Saadi™", link = "https://www.linkedin.com/in/rami-al-saadi-16a14223a/" }) {
  return <span className="copyright-disclaimer text-sm text-gray-500 sm:text-center dark:text-gray-400">
    © {year}{" "}
    <a
      href="https://www.linkedin.com/in/rami-al-saadi-16a14223a/"
      className="hover:underline"
      target="_blank"
      rel="noopener noreferrer"
    >
      {author}
    </a>
    . All Rights Reserved.
  </span>;
}

export default CopyrightDisclaimer;