import React, { useRef, useState, Suspense } from "react";
import SphereLight from "./SphereLight";

const BackgroundLights = () => {
  let backgroundLights = [];
  let colors = ["#4C1BEE", "#43CCF9", "#FA7ABB"];
  let NUMBER_OF_LIGHTS = 150;

  for (let i = 0; i < NUMBER_OF_LIGHTS; i++) {
    var plusOrMinus_1 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus_2 = Math.random() < 0.5 ? -1 : 1;

    let xPos = plusOrMinus_1 * (10 * Math.random(0.1));
    let yPos = plusOrMinus_2 * (10 * Math.random(0.1));
    let zPos = plusOrMinus_2 * (10 * Math.random(0.1));
    let randomScale = Math.random(0.1) / 10;
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    let initialLightIncrementValue = Math.random(0.1);

    let lightUpwardAcceleration = Math.random(0.2) / 1000;
    let lightIntensityMultiplier = 1.5;

    let sphereLight = (
      <SphereLight
        position={[xPos, yPos, zPos]}
        scale={[randomScale, randomScale, randomScale]}
        color={randomColor}
        lightIncrementAdder={0.005}
        lightIntensityMultiplier={lightIntensityMultiplier}
        initialLightIncrementValue={initialLightIncrementValue}
        upwardAccelerationRate={lightUpwardAcceleration}
      />
    );
    backgroundLights.push(sphereLight);
  }

  return <group>{backgroundLights}</group>;
};

export default BackgroundLights;
