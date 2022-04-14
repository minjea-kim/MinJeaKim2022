import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

const Rose = (props) => {
  const roseRef = useRef();

  const { nodes } = useGLTF("/images/test.glb");

  return (
    <mesh {...props} ref={roseRef} geometry={nodes.rose.geometry}>
      <meshStandardMaterial
        color="#141C25"
        roughness="0.421"
        metalness="0.8773"
        clearcoat="0"
        clearcoatRoughness="0.3"
        castShadow={false}
        receiveShadow={false}
      />
    </mesh>
  );
};

export default Rose;
