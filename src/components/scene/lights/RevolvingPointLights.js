import React, { useEffect, useRef, useState } from "react";
import PointSphereLight from "./PointSphereLight";
import Revolver from "./Revolver";

let DISTANCE_FROM_LIGHT = 4.5;
const lightsData = [
  {
    position: [DISTANCE_FROM_LIGHT, 0, 0],
    scale: [0.15, 0.15, 0.15],
    rotationSpeed: 0,
    color: "#4C1BEE",
    lightIncrementAdder: 0.005,
    lightIntensityMultiplier: 0,
    initialLightIncrementValue: Math.random(0.1),
    upwardAccelerationRate: 0,
  },
  {
    position: [-DISTANCE_FROM_LIGHT, 0, 0],
    scale: [0.15, 0.15, 0.15],
    rotationSpeed: 0,
    color: "#43CCF9",
    lightIncrementAdder: 0.005,
    lightIntensityMultiplier: 0,
    initialLightIncrementValue: Math.random(0.1),
    upwardAccelerationRate: 0,
  },
  {
    position: [0, 0, DISTANCE_FROM_LIGHT],
    scale: [0.15, 0.15, 0.15],
    rotationSpeed: 0,
    color: "#FA7AB8",
    lightIncrementAdder: 0.005,
    lightIntensityMultiplier: 0,
    upwardAccelerationRate: 0,
    initialLightIncrementValue: Math.random(0.1),
  },
  {
    position: [0, 0, -DISTANCE_FROM_LIGHT],
    scale: [0.15, 0.15, 0.15],
    rotationSpeed: 0,
    color: "#FA7AB8",
    lightIncrementAdder: 0.005,
    lightIntensityMultiplier: 0,
    upwardAccelerationRate: 0,
    initialLightIncrementValue: Math.random(0.1),
  },
];

const RevolvingPointLights = () => {
  const [allPointLights, setAllPointLights] = useState([]);

  useEffect(() => {
    let pointSphereLights = [];

    for (const lightData of lightsData) {
      // if (isMobile) {
      //   lightData.lightIntensityMultiplier = 1;
      // } else {
      //   lightData.lightIntensityMultiplier = 2;
      // }

      lightData.lightIntensityMultiplier = 1;

      let pointSphereLight = (
        <Revolver>
          <PointSphereLight
            position={lightData.position}
            scale={lightData.scale}
            rotationSpeed={lightData.rotationSpeed}
            color={lightData.color}
            lightIncrementAdder={lightData.lightIncrementAdder}
            lightIntensityMultiplier={lightData.lightIntensityMultiplier}
            upwardAccelerationRate={lightData.upwardAccelerationRate}
            initialLightIncrementValue={lightData.initialLightIncrementValue}
          />
        </Revolver>
      );

      pointSphereLights.push(pointSphereLight);
    }

    setAllPointLights(pointSphereLights);
    console.log(allPointLights);
  }, []);

  return <group>{allPointLights}</group>;
};

export default RevolvingPointLights;