import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import Rose from "./Rose";

const Bouquet = (props) => {
  const roseRef = useRef(null);
  const [bouquetPosition, setBouquetPosition] = useState([0, 0, 0]);
  const [bouquetScale, setBouquetScale] = useState([2.5, 2.5, 2.5]);

  console.log(roseRef);

  useFrame(() => {
    roseRef.current.rotation.y += 0.0018;
    if (window.innerWidth < 600) {
      roseRef.current.rotation.x += -0.000;
    }
  });

  // makeMobileSize();

  useEffect(() => {
    const resizeFlowers = () => {
      if (window.innerWidth < 600) {
        setBouquetPosition([0, -1.6, 0]);
        setBouquetScale([2.8, 2.8, 2.8]);
      } else {
        setBouquetPosition([0, 0, 0]);
        setBouquetScale([2.6, 2.6, 2.6]);
      }
    };

    resizeFlowers();

    window.addEventListener("resize", resizeFlowers);
  }, []);

  let FLOWER_DISTANCE = 0.3;

  return (
    <group scale={bouquetScale} position={bouquetPosition} ref={roseRef}>
      {/* Top Rose */}
      <Rose
        position={[0, FLOWER_DISTANCE, 0]}
        rotation={[0, Math.PI, 0]}
        scale={[1.2, 1.2, 1.2]}
      />
      {/* Bottom Rose */}
      <Rose
        position={[0, -FLOWER_DISTANCE, 0]}
        rotation={[0, 0, -Math.PI]}
        scale={[1, 1, 1]}
      />
      {/* Left Rose */}
      <Rose
        position={[-FLOWER_DISTANCE, 0, 0]}
        rotation={[0, 0, Math.PI / 2]}
        scale={[1.65, 1.65, 1.65]}
      />
      {/* Right Rose */}
      <Rose
        position={[FLOWER_DISTANCE, 0, 0]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={[1.5, 1.5, 1.5]}
      />
      {/* Front Rose */}
      <Rose
        position={[0, 0, FLOWER_DISTANCE]}
        rotation={[0, Math.PI / 2, Math.PI / 2]}
        scale={[1.55, 1.55, 1.55]}
      />
      {/* Back Rose */}
      <Rose
        position={[0, 0, -FLOWER_DISTANCE]}
        rotation={[0, Math.PI / 2, -Math.PI / 2]}
        scale={[1.55, 1.55, 1.55]}
      />
    </group>
  );
};

export default Bouquet;
