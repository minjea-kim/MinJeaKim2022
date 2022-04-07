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
import Bouquet from "./Bouquet";
import GroupedPointLight from "./GroupedPointLight";
import {
  EffectComposer,
  DepthOfField,
  Bloom,
  Noise,
  Vignette,
} from "react-postprocessing";

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

let FLOWER_DISTANCE = 0.3;

const ThreeJSCanvas = (props) => {
  return (
    <div class="canvas-wrapper">
      <Canvas dpr={[1, 2]} frustumCulled={false}>
        <CameraController />
        <Suspense fallback={null}>
          <Bouquet />
          <GroupedPointLight
            color="#2E3192"
            position={[4, 0, 0]}
            upwardAccelerationRate={0.004}
            lightToggleSpeed={0.001}
          />
          <GroupedPointLight
            color="#149f96"
            position={[-4, -1, 0]}
            upwardAccelerationRate={0.0013}
            lightToggleSpeed={0.0014}
          />
          <GroupedPointLight
            color="#1BFFFF"
            position={[0.5, -1.4, 3]}
            upwardAccelerationRate={0.001}
            lightToggleSpeed={0.0014}
          />
          {/* <primitive object={new THREE.AxesHelper(10)} /> */}
        </Suspense>
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
        </EffectComposer>
      </Canvas>
    </div>
  );
};

export default ThreeJSCanvas;
