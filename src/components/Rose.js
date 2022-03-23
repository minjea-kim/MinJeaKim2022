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
  // This reference will give us direct access to the mesh so we can animate it
  // const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  // useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const { nodes, material } = useGLTF("/images/MJK2022_Rose_v5.glb");
  console.log(nodes);

  return (
    <mesh {...props} geometry={nodes.rose.geometry} material={material}></mesh>
  );
};

export default Rose;
