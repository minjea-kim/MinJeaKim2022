import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import * as THREE from "three";

const PointSphereLight = ({
  color,
  position,
  upwardAccelerationRate,
  lightIncrementAdder,
  lightIntensityMultiplier,
  initialLightIncrementValue,
}) => {
  const [lightIncrementer, incrementLight] = useState(
    initialLightIncrementValue
  );
  const [lightIntensity, setLightIntensity] = useState(1);
  const pointLightRef = useRef();

  useFrame(() => {
    pointLightRef.current.position.y += upwardAccelerationRate;
    incrementLight(lightIncrementer + lightIncrementAdder);
    setLightIntensity(
      Math.abs(lightIntensityMultiplier * Math.sin(lightIncrementer))
    );
  });

  const pointLight = new THREE.PointLight(color, lightIntensity, 100);

  return (
    <group ref={pointLightRef} position={position}>
      {/* <primitive object={new THREE.PointLightHelper(pointLight, 1)} /> */}
      <primitive object={pointLight} />
    </group>
  );
};

export default PointSphereLight;
