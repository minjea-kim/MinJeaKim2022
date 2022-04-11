import React from "react";
import Hamburger from "./HamburgerMenu";
import "../css/global/global.scss";

export default function Layout({ children }) {
  return (
    <div className="layout">
      <Hamburger />
      {children}
    </div>
  );
}
