import React, { useRef, useState } from "react";
import MenuLinks from "./global/MenuLinks";
import "../css/hamburger.scss";

const Hamburger = (props) => {
  const [toggled, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMenuState = () => {
    console.log("TOGGLING");
    setToggle(!toggled);
  };

  return (
    <div class="hamburger toggled">
      {toggled ? (
        <div class="mobile-menu">
          <div class="menu-links" id="test">
            <a href="">CASE STUDIES</a>
            <a href="">ARTWORK</a>
            <a href="">MISC. WORK</a>
            <a href="">ABOUT</a>
            <a href="">CONTACT</a>
          </div>
        </div>
      ) : (
        <div></div>
      )}
      <div className="hamburger nontoggled" onClick={toggleMenuState}>
        <div id="first"></div>
        <div id="second"></div>
        <div id="third"></div>
        <div id="fourth"></div>
        <div id="fifth"></div>
      </div>
    </div>
  );
};

export default Hamburger;
