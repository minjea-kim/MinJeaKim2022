import React, { useRef } from "react";
import { useFrame } from "react-three-fiber";

const Revolver = (props) => {
  const pointLight = useRef();

  useFrame(() => {
    pointLight.current.rotation.y += Math.random(0.1) / 100;
  });

  return <group ref={pointLight}>{props.children}</group>;
};

export default Revolver;
