import React, { useRef, useState } from "react";
import { Link } from "gatsby";
import "../../css/global/menulinks.scss"

const MenuLinks = (props) => {
  return (
    <div class="menu-links">
      <Link to="">CASE STUDIES</Link>
      <Link to="">ARTWORK</Link>
      <Link to="">MISC. WORK</Link>
      <Link to="">ABOUT</Link>
      <Link to="">CONTACT</Link>
    </div>
  );
};

export default MenuLinks;
