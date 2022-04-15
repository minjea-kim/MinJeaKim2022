import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";

// Model
import Bouquet from "./model/Bouquet";

// Scene
import BloomPass from "./scene/BloomPass";
import MainCanvas from "./scene/MainCanvas";
import CameraController from "./scene/CameraController";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import RevolvingPointLights from "./scene/lights/RevolvingPointLights";
import BackgroundOrbs from "./scene/lights/BackgroundOrbs";

// Misc.
import "../css/index.scss";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

const ThreeJSCanvas = (props) => {
  const [cameraZoom, setCameraZoom] = useState(50);

  useEffect(() => {
    if (window.innerWidth < 600) {
      setCameraZoom(70);
    } else {
      setCameraZoom(200);
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
            <RevolvingPointLights />
          </MainCanvas>
        </Suspense>
        <BloomPass>
          <BackgroundOrbs />
        </BloomPass>
      </Canvas>
    </div>
  );
};

export default ThreeJSCanvas;
