import React, { useRef, useState, Suspense } from "react";
import { Canvas, useFrame, useThree } from "react-three-fiber";
import Layout from "../components/Layout";
import Rose from "../components/Rose";
import SectionTemplate from "../components/SectionTemplate";
import MenuLinks from "../components/global/MenuLinks";
import "../css/index.scss";

const IndexPage = () => (
  <Layout>
    <div class="canvas-wrapper">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          {/* <pointLight position={[0, 0, 0]} color="white" /> */}
          <directionalLight position={[0, -0.5, 4.5]} intensity="1.6" />
          <pointLight position={[0, -3, 0]} intensity="1" color="#142A36" />
          <Rose position={[0, -0.4, 3.9]} rotation={[-0.4, 0, 0]} />
        </Suspense>
      </Canvas>
    </div>
    <div className="homepage">
      <h1>MIN JEA KIM</h1>
      <p>Designer and Software Engineer</p>
      <MenuLinks />
    </div>
    <SectionTemplate />
    <SectionTemplate />
    <SectionTemplate />
  </Layout>
);

export default IndexPage;
