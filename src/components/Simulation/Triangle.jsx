import React, { useState } from "react";
import "./Triangle.css";

const steps = [
  "Input the values of x and y coordinates of the three vertices of the triangle in the specified fields",
  "Once all coordinates have been entered click on the Draw Triangle button to get the triangle on the graph.",
  "Click on the points of the base of the triangle to get a line parallel to the base.",
  "Drag the newly created parallel line along the base to divide the triangle's sides.",
  "Click on the Use scale button to get the scale on the graph.",
  "Utilize the ruler to measure the lengths of the sides divided by the parallel line. Take note of these lengths.",
  "Click on the Calculate Ratio button to obtain the ratio you calculated and compare it with the actual result. If they do not match, there might be an error in the calculation. Retry by recalculating the lengths and ratio using the scale until you get a match.",
];
const Triangle = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(steps[0]);
  const [btn, setBtn] = useState(false);

  const displayNext = () => {
    if (count < steps.length - 1) {
      setCount(count + 1);
      setStep(steps[count + 1]);
    }
  };

  const displayPrev = () => {
    if (count > 0) {
      setCount(count - 1);
      setStep(steps[count - 1]);
    }
  };

  const setStyle = () => {
    setBtn(true);
  };

  return (
    <>
      <div className="full-bar">
        <iframe
          title="graph"
          src={process.env.PUBLIC_URL + "/test.html"}
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
};

export default Triangle;
