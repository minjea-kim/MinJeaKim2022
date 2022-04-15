import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

const Orb = ({
  position,
  scale,
  color,
  opacityIncrementAdder,
  initialOpacityIncrementValue,
  upwardAccelerationRate,
}) => {
  const orb = useRef();

  const [opacityIncrementer, incrementOpacity] = useState(
    initialOpacityIncrementValue
  );

  const [opacity, setOpacity] = useState(Math.random(0.1));

  useFrame(() => {
    orb.current.position.y += upwardAccelerationRate;
    incrementOpacity(opacityIncrementer + opacityIncrementAdder);
    setOpacity(Math.abs(Math.sin(opacityIncrementer)));
  });

  return (
    <mesh position={position} scale={scale} ref={orb} opacity={opacity}>
      <sphereBufferGeometry attach="geometry" />
      <meshBasicMaterial
        color={color}
        attach="material"
        transparent={true}
        opacity={opacity}
      />
    </mesh>
  );
};

export default Orb;
