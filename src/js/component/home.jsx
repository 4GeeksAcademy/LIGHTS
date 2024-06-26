import React, { useState } from "react";

//include images into your bundle (assuming you're using images)

// create your first component
export function Home() {
  const [selectedColor, setSelectedColor] = useState("red");

  return (
    <div className="trafficLight">
      <div
        onClick={() => setSelectedColor("red")}
        className={"light red" + (selectedColor === "red" ? " glow" : "")}
      ></div>
      <div
        onClick={() => setSelectedColor("yellow")}
        className={"light yellow" + (selectedColor === "yellow" ? " glow" : "")}
      ></div>
      <div
        onClick={() => setSelectedColor("green")}
        className={"light green" + (selectedColor === "green" ? " glow" : "")}
      ></div>
    </div>
  );
}

export default Home;