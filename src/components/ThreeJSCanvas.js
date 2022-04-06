import React, { useRef, useState, useEffect, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import Layout from "./Layout";
import Rose from "./Rose";
import SectionCanvas from "./SectionTemplate";
import MenuLinks from "./global/MenuLinks";
import Particles from "./Particles";
import "../css/index.scss";
import * as THREE from "three";
import Bouqet from "./Bouquet";

const CameraController = () => {
  const { camera, gl } = useThree();
  useEffect(() => {
    const controls = new OrbitControls(camera, gl.domElement);

    controls.minDistance = 3;
    controls.maxDistance = 20;
    return () => {
      controls.dispose();
    };
  }, [camera, gl]);
  return null;
};

const ThreeJSCanvas = (props) => {
  return (
    <div class="canvas-wrapper">
      <Canvas dpr={[1, 2]} frustumCulled={false}>
        <CameraController />
        <Suspense fallback={null}>
          {/* <pointLight position={[0, 0, 0]} color="white" /> */}
          <ambientLight intensity={2} />
          {/* <directionalLight position={[0, -FLOWER_DISTANCE, 4.5]} intensity="1.8" /> */}
          {/* <pointLight position={[6, 0, 0]} intensity="4" color="white" />
          <pointLight position={[0, -3, 0]} intensity="1" color="#142A36" />
          <pointLight position={[0, 0, 5]} intensity="3" color="white" /> */}
          {/* <Particles particleCount={300}/> */}
          <Bouqet />
          <primitive object={new THREE.AxesHelper(10)} />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeJSCanvas;