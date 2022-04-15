import React from "react";
import Orb from "./Orb";

const BackgroundOrbs = () => {
  let backgroundOrbs = [];
  let colors = ["#4C1BEE", "#43CCF9", "#FA7ABB"];
  let numberOfLights = 150;

  for (let i = 0; i < numberOfLights; i++) {
    // Positive or negative sign generator
    var plusOrMinus_1 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus_2 = Math.random() < 0.5 ? -1 : 1;
    var plusOrMinus_3 = Math.random() < 0.5 ? -1 : 1;

    // Positions
    let xPos = plusOrMinus_1 * (10 * Math.random(0.1));
    let yPos = plusOrMinus_2 * (10 * Math.random(0.1));
    let zPos = plusOrMinus_3 * (10 * Math.random(0.1));

    // Opacity
    let initialOpacityIncrementValue = Math.random(0.1);
    let opacityIncrementAdder = Math.random(0.1) / 100;

    // Misc. attributes
    let randomScale = Math.random(0.1) / 10;

    let randomColor = colors[Math.floor(Math.random() * colors.length)];

    let upwardAccelerationRate = Math.random(0.1) / 900;

    let orbOpacity = (
      <Orb
        position={[xPos, yPos, zPos]}
        scale={[randomScale, randomScale, randomScale]}
        color={randomColor}
        opacityIncrementAdder={opacityIncrementAdder}
        initialOpacityIncrementValue={initialOpacityIncrementValue}
        upwardAccelerationRate={upwardAccelerationRate}
      />
    );
    backgroundOrbs.push(orbOpacity);
  }

  return <group>{backgroundOrbs}</group>;
};

export default BackgroundOrbs;
