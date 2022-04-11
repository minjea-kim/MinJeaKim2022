import React, { useRef, useState } from "react";
import "../css/hamburger.scss";

const Hamburger = (props) => {
  const [toggled, setToggle] = useState(false);
  const [active, setActive] = useState(false);

  const toggleMenuState = () => {
    console.log("TOGGLING");
    setToggle(!toggled);
  };

  return (
    <div>
      {toggled ? <div class="mobile-menu"></div> : <div></div>}
      <div className="hamburger" onClick={toggleMenuState}>
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
