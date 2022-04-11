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

const { sphereLights, pointSphereLights } = generateLights();

const backgroundLights = generateBackgroundLights();

const ThreeJSCanvas = (props) => {
  return (
    <div class="canvas-wrapper">
      <Canvas dpr={[1, 2]} frustumCulled={false}>
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
