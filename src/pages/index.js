import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import Rose from "../components/Rose";
import "../css/index.scss";

const IndexPage = () => (
  <div class="homepage">
    <Canvas>
      <Suspense fallback={null}>
        <ambientLight />
        <pointLight position={[0, 0, 0]} />
        <Rose position={[0, 0, 0]} />
      </Suspense>
    </Canvas>
  </div>
);

export default IndexPage;
