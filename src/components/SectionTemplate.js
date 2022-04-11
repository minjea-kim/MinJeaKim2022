import React, { useRef, useState } from "react";
import Carousel from "./Carousel";

const SectionTemplate = (props) => {
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <section>
      <Carousel />
    </section>
  );
};

export default SectionTemplate;
