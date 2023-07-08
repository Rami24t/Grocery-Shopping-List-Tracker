import React from "react";
import Company from "./Company";
import FooterLists from "./FooterLists";

export function TopFooter() {
  return <div className="footer-top flex flex-col md:flex-row flex-wrap gap-3 justify-between">
    <Company
      logo="/logo-no-background.svg"
      name="Rami Al-Saadi"
      link="https://www.linkedin.com/in/rami-al-saadi-16a14223a/" />
    <FooterLists />
  </div>;
}