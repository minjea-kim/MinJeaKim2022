import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";

const Rose = (props) => {
  const roseRef = useRef();

  useFrame(() => {
    // roseRef.current.rotation.x += 0.003;
    // roseRef.current.rotation.y += 0.003;
    // roseRef.current.rotation.z += 0.0008;
  });

  const { nodes } = useGLTF("/images/test.glb");
  console.log(nodes)

  return (
    <mesh {...props} ref={roseRef} geometry={nodes.rose.geometry}>
      <meshStandardMaterial
        color="#141C25"
        roughness="0.671"
        metalness="0.7773"
        clearcoat="0"
        clearcoatRoughness="0.3"
        castShadow={false}
        receiveShadow={false}
      />
    </mesh>
  );
};

export default Rose;
