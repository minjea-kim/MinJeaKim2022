import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";

const GroupedPointLight = ({
  color,
  position,
  upwardAccelerationRate,
  lightToggleSpeed,
  lightIntensityMultiplier
}) => {
  const [lightIncrementer, incrementLight] = useState(Math.random());
  const [lightIntensity, setLightIntensity] = useState(0);
  const pointLightRef = useRef();
  const xPos = position[0];
  const yPos = position[1];
  const zPos = position[2];

  useFrame(() => {
    pointLightRef.current.position.y += upwardAccelerationRate;
    incrementLight(lightIncrementer + lightToggleSpeed);
    setLightIntensity(lightIntensityMultiplier * Math.sin(lightIncrementer));
    console.log();
  });

  const pointLight = new THREE.PointLight(color, lightIntensity, 100);
  pointLight.position.set(xPos, yPos, zPos);

  return (
    <group ref={pointLightRef}>
      {/* <mesh position={[xPos, yPos, zPos]}>
        <sphereGeometry />
        <meshStandardMaterial />
      </mesh> */}
      {/* <primitive object={new THREE.PointLightHelper(pointLight, 1)} /> */}
      <primitive object={pointLight} />
    </group>
  );
};

export default GroupedPointLight;
