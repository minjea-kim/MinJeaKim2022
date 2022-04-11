import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const SphereLight = ({
  color,
  position,
  scale,
  upwardAccelerationRate,
  lightIncrementAdder,
  initialLightIncrementValue,
}) => {
  const sphereLight = useRef();

  const [lightIncrementer, incrementLight] = useState(
    initialLightIncrementValue
  );
  const [lightIntensity, setLightIntensity] = useState(1);

  useFrame(() => {
    sphereLight.current.position.y += upwardAccelerationRate;
    incrementLight(lightIncrementer + lightIncrementAdder);
    setLightIntensity(Math.abs(Math.sin(lightIncrementer)));
  });

  return (
    <mesh position={position} scale={scale} ref={sphereLight} opacity={0}>
      <sphereBufferGeometry attach="geometry" />
      <meshBasicMaterial
        color={color}
        attach="material"
        transparent={true}
        opacity={lightIntensity}
      />
    </mesh>
  );
};

export default SphereLight;
