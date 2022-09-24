import React, { useState } from "react";
import "./Mobile.css";

const Mobile = () => {
  const [percentage, setPercentage] = useState(100);
  const batteryDown = () => setPercentage(percentage - 1);
  if (percentage === 0) {
    alert("Battery Is to Low");
  }
  return (
    <div>
      <h1>Battery </h1>
      <h3> Battery Percentage : {percentage} </h3>
      <button onClick={batteryDown}>Down</button>
    </div>
  );
};

export default Mobile;
