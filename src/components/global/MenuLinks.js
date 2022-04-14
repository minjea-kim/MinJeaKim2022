import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import "../../css/global/menulinks.scss"

const MenuLinks = (props) => {
  return (
    <div class="menu-links">
      <a href="">CASE STUDIES</a>
      <a href="">ARTWORK</a>
      <a href="">MISC. WORK</a>
      <a href="">ABOUT</a>
      <a href="">CONTACT</a>
    </div>
  );
};

export default MenuLinks;
