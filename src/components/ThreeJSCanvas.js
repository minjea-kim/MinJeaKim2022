import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";

// Model
import Bouquet from "./model/Bouquet";

// Scene
import BloomPass from "./scene/BloomPass";
import MainCanvas from "./scene/MainCanvas";
import CameraController from "./scene/CameraController";
import {
  generateLights,
  generateBackgroundLights,
} from "./scene/LightGenerator";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";

// Misc.
import "../css/index.scss";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const ThreeJSCanvas = (props) => {
  const [cameraZoom, setCameraZoom] = useState(50);
  const [sphereLights, setSphereLights] = useState(null);
  const [pointSphereLights, setPointSphereLights] = useState(null);

  const backgroundLights = generateBackgroundLights();

  useEffect(() => {
    if (window.innerWidth < 600) {
      setCameraZoom(70);
      let lights = generateLights(true);
      setSphereLights(lights.sphereLights);
      setPointSphereLights(lights.pointSphereLights);
    } else {
      setCameraZoom(200);
      let lights = generateLights(false);
      setSphereLights(lights.sphereLights);
      setPointSphereLights(lights.pointSphereLights);
    }
  }, []);

  return (
    <div class="canvas-wrapper">
      <Canvas
        orthographic
        camera={{
          zoom: cameraZoom,
          position: [0, 0, 50],
        }}
        dpr={[1, 2]}
        frustumCulled={false}
      >
        <CameraController />
        <Suspense fallback={null}>
          <MainCanvas>
            {/* <primitive object={new THREE.AxesHelper(10)} /> */}
            <Bouquet />
            {pointSphereLights}
          </MainCanvas>
        </Suspense>
        <BloomPass>
          {sphereLights}
          {backgroundLights}
        </BloomPass>
      </Canvas>
    </div>
  );
};

export default ThreeJSCanvas;
