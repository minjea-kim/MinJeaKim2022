import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import "../css/index.scss";
import * as THREE from "three";
import Bouquet from "./Bouquet";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import SphereLight from "../components/SphereLight";
import PointSphereLight from "../components/PointSphereLight";
import * as constants from "../constants/scene";

extend({ EffectComposer, RenderPass, UnrealBloomPass });

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

console.log("CONSTANTS: ", constants);
let FLOWER_DISTANCE = 0.3;

extend({ EffectComposer, RenderPass, UnrealBloomPass });

function Bloom({ children }) {
  const { gl, camera, size } = useThree();
  const [scene, setScene] = useState();
  const composer = useRef();
  useEffect(
    () => void scene && composer.current.setSize(size.width, size.height),
    [size]
  );
  useFrame(() => scene && composer.current.render(), 1);
  return (
    <>
      <scene ref={setScene}>{children}</scene>
      <effectComposer ref={composer} args={[gl]}>
        <renderPass attachArray="passes" scene={scene} camera={camera} />
        <unrealBloomPass attachArray="passes" args={[undefined, 1.5, 1, 0]} />
      </effectComposer>
    </>
  );
}

function Main({ children }) {
  const scene = useRef();
  const { gl, camera } = useThree();
  useFrame(() => {
    gl.autoClear = false;
    gl.clearDepth();
    gl.render(scene.current, camera);
  }, 2);
  return <scene ref={scene}>{children}</scene>;
}

let pointSphereLights = [];
let sphereLights = [];
let colors = ["#FC466B", "#3F5EFB", "#e4c25e"];
let DISTANCE_FROM_FLOWER = 1;

for (let i = 0; i < 10; i++) {
  var plusOrMinus_1 = Math.random() < 0.5 ? -1 : 1;
  var plusOrMinus_2 = Math.random() < 0.5 ? -1 : 1;
  var plusOrMinus_3 = Math.random() < 0.5 ? -1 : 1;

  let xPos = plusOrMinus_1 * (3 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
  let yPos = plusOrMinus_2 * (3 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
  let zPos = plusOrMinus_3 * (3 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
  let initialLightIncrementValue = Math.random(0.1);
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  let lightUpwardAcceleration = Math.random(0.2) / 1000;
  let lightIntensityMultiplier = 1;
  // let lightUpwardAcceleration = 0;
  let sphereLight = (
    <SphereLight
      position={[xPos, yPos, zPos]}
      scale={[0.2, 0.2, 0.2]}
      color={randomColor}
      lightIncrementAdder={0.005}
      lightIntensityMultiplier={lightIntensityMultiplier}
      initialLightIncrementValue={initialLightIncrementValue}
      upwardAccelerationRate={lightUpwardAcceleration}
    />
  );
  let pointSphereLight = (
    <PointSphereLight
      position={[xPos, yPos, zPos]}
      color={randomColor}
      lightIncrementAdder={0.005}
      lightIntensityMultiplier={lightIntensityMultiplier}
      initialLightIncrementValue={initialLightIncrementValue}
      upwardAccelerationRate={lightUpwardAcceleration}
    />
  );

  sphereLights.push(sphereLight);
  pointSphereLights.push(pointSphereLight);
}
console.log(pointSphereLights);
console.log(sphereLights);

const ThreeJSCanvas = (props) => {
  return (
    <div class="canvas-wrapper">
      <Canvas dpr={[1, 2]} frustumCulled={false}>
        <CameraController />
        <Suspense fallback={null}>
          <Main>
            {/* <primitive object={new THREE.AxesHelper(10)} /> */}
            <Bouquet />
            {pointSphereLights}
          </Main>
        </Suspense>
        <Bloom>{sphereLights}</Bloom>
      </Canvas>
    </div>
  );
};

export default ThreeJSCanvas;
