import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

const Rose = (props) => {
  const roseRef = useRef();

  useFrame(() => {
    roseRef.current.rotation.y += 0.003;
    // roseRef.current.rotation.z += 0.0008;
  });

  const { nodes } = useGLTF("/images/MJK2022_Rose_v9.glb");

  return (
    <mesh {...props} ref={roseRef} geometry={nodes.rose.geometry}>
      <meshStandardMaterial
        color="#183240"
        roughness="0.611"
        metalness="0.773"
        clearcoat="0"
        clearcoatRoughness="0.3"
      />
    </mesh>
  );
};

export default Rose;
