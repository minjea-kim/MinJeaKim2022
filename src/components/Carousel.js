import React, { useRef, useState } from "react";
import "../css/carousel.scss"; const Carousel = (props) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="carousel">
      <div class="middle-slide"></div>
    </div>
  );
};

export default Carousel;
