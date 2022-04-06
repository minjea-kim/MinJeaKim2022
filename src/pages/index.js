import React, { useRef, useState, useEffect, Suspense } from "react";
import Layout from "../components/Layout";
import SectionTemplate from "../components/SectionTemplate";
import MenuLinks from "../components/global/MenuLinks";
import ThreeJSCanvas from "../components/ThreeJSCanvas";
import "../css/index.scss";

const IndexPage = () => (
  <Layout>
    <div className="homepage">
      <ThreeJSCanvas />
      <div>
        <h1>MIN JEA KIM</h1>
        <p>Designer and Software Engineer</p>
        <MenuLinks />
      </div>
    </div>
    <SectionTemplate />
    <SectionTemplate />
    <SectionTemplate />
  </Layout>
);

export default IndexPage;
