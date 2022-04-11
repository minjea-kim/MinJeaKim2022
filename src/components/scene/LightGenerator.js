import React, { useRef, useState, Suspense } from "react";
import PointSphereLight from "./PointSphereLight";
import SphereLight from "./SphereLight";

let colors = ["#4c1bee", "#43ccf9", "#fa7ab8"];
let DISTANCE_FROM_FLOWER = 1;

export const generateLights = () => {
  let pointSphereLights = [];
  let sphereLights = [];
  let NUMBER_OF_LIGHTS = 10;

  for (let i = 0; i < NUMBER_OF_LIGHTS; i++) {
    var plusOrMinus_1 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus_2 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus_3 = Math.random() < 0.5 ? -1 : 1;

    let xPos = plusOrMinus_1 * (3 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
    let yPos = plusOrMinus_2 * (3 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
    let zPos = plusOrMinus_3 * (3 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
    let initialLightIncrementValue = Math.random(0.1);
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let lightUpwardAcceleration = Math.random(0.2) / 1000;
    let lightIntensityMultiplier = 2;
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

  return {
    sphereLights: sphereLights,
    pointSphereLights: pointSphereLights,
  };
};

export const generateBackgroundLights = () => {
  let backgroundLights = [];
  let NUMBER_OF_LIGHTS = 30;

  for (let i = 0; i < NUMBER_OF_LIGHTS; i++) {
    var plusOrMinus_1 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus_2 = Math.random() < 0.5 ? -1 : 1;

    let xPos = plusOrMinus_1 * (10 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
    let yPos = plusOrMinus_2 * (10 * Math.random(0.1) + DISTANCE_FROM_FLOWER);
    let zPos = -(2 * (Math.random(0.1) + DISTANCE_FROM_FLOWER));
    let randomScale = Math.random(0.1) / 10;
    let initialLightIncrementValue = Math.random(0.1);
    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let lightUpwardAcceleration = Math.random(0.2) / 1000;
    let lightIntensityMultiplier = 1.5;
    // let lightUpwardAcceleration = 0;
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

  return backgroundLights;
};
