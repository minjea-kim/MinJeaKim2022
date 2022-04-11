import React, { useRef, useState } from "react";
import "../css/carousel.scss";
import { StaticImage } from "gatsby-plugin-image";

const Carousel = (props) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <div className="carousel">
      <div class="container">
        <div class="prior-slide">
          <div class="overlay"></div>
          <StaticImage
            src="https://minjeakim.com/uploads/audical_coverimage_mobile.jpg"
            alt="test"
          />
        </div>
        <div class="middle-slide">
          <StaticImage
            src="https://minjeakim.com/uploads/ensemble_coverimage_mobile.jpg"
            alt="test"
          />
        </div>
        <div class="next-slide">
          <div class="overlay"></div>
          <StaticImage
            src="https://minjeakim.com/uploads/uvalphie_coverphoto_mobile.jpg"
            alt="test"
          />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
