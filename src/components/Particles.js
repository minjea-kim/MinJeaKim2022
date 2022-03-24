import React, { useMemo } from "react";
import { useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

const Particles = ({ particleCount }) => {
  const count = particleCount;

  const colorMap = useLoader(TextureLoader, "/images/particle-texture.png");

  const [positions, sizes] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10;
    }

    return [positions, sizes];
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attachObject={["attributes", "position"]}
          count={positions.length / 3}
          itemSize={3}
          array={positions}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} sizeAttenuation={true} color="cyan" alphaMap={colorMap} transparent={true}/>
    </points>
  );
};

export default Particles;
