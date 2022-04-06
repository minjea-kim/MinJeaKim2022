import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

const Template = (props) => {
  const roseRef = useRef();

  useFrame(() => {
    // roseRef.current.rotation.x += 0.003;
    // roseRef.current.rotation.y += 0.003;
    // roseRef.current.rotation.z += 0.0008;
  });

  return (
    <mesh {...props}>
    </mesh>
  );
};

export default Template;
