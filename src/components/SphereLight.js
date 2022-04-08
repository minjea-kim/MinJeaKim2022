import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const SphereLight = ({
  color,
  position,
  scale,
  upwardAccelerationRate,
  lightToggleSpeed,
  lightIntensityMultiplier,
}) => {
  const sphereLight = useRef();
  const xPos = position[0];
  const yPos = position[1];
  const zPos = position[2];

  useFrame(() => {
    sphereLight.current.position.y += 0.01;
  });

  return (
    <mesh position={[xPos, yPos, zPos]} scale={scale} ref={sphereLight}>
      <sphereBufferGeometry attach="geometry" />
      <meshBasicMaterial color={color} attach="material" />
    </mesh>
  );
};

export default SphereLight;
