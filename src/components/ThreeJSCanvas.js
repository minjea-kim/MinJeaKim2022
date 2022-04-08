import React, { useRef, useState, useEffect, useMemo, Suspense } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Canvas, useFrame, useThree, extend } from "react-three-fiber";
import Layout from "./Layout";
import Rose from "./Rose";
import SectionCanvas from "./SectionTemplate";
import MenuLinks from "./global/MenuLinks";
import Particles from "./Particles";
import "../css/index.scss";
import * as THREE from "three";
import Bouquet from "./Bouquet";
import GroupedPointLight from "./GroupedPointLight";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import SphereLight from "../components/SphereLight";

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

const ThreeJSCanvas = (props) => {
  return (
    <div class="canvas-wrapper">
      <Canvas dpr={[1, 2]} frustumCulled={false}>
        <CameraController />
        <Suspense fallback={null}>
          <Main>
            <primitive object={new THREE.AxesHelper(10)} />
            <Bouquet />
            <pointLight />
            {/* <ambientLight /> */}
          </Main>
        </Suspense>
        <Bloom>
          <ambientLight />
          <SphereLight
            position={[4, -4, 0]}
            scale={[0.3, 0.3, 0.3]}
            color="#ff00ff"
            upwardAccelerationRate={0.002}
          />
          <SphereLight
            position={[-4, -1, 0]}
            scale={[0.2, 0.2, 0.2]}
            color="#ff00ff"
            upwardAccelerationRate={0.0008}
          />
          <SphereLight
            position={[0, 0, 0]}
            scale={[0.25, 0.25, 0.25]}
            color="#ff00ff"
            upwardAccelerationRate={0.007}
          />
        </Bloom>
      </Canvas>
    </div>
  );
};

export default ThreeJSCanvas;
