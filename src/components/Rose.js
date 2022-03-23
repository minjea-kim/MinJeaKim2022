import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import {
  useGLTF,
  PresentationControls,
  Environment,
  ContactShadows,
  Html,
} from "@react-three/drei";

const Rose = (props) => {
  const roseRef = useRef();

  useFrame(() => (roseRef.current.rotation.y += 0.01));

  const { nodes, material } = useGLTF("/images/MJK2022_Rose_v5.glb");
  console.log(nodes);

  return (
    <mesh {...props} ref={roseRef} geometry={nodes.rose.geometry} material={material}></mesh>
  );
};

export default Rose;
