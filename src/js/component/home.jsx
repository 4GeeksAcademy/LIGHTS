import React,{useState} from "react";

//include images into your bundle


//create your first component
export function Home() {
	const [ selectedColor,setSelectedColor ] = useState("red");

	return (
		<div className="trafficLight">
			<div 
				className={"light red" + (selectedColor=== "red" ? "glow" : "")}></div>
			<div 
				className={"light yellow" + (selectedColor=== "yellow" ? "glow" : "")}></div>
				<div 
				className={"light green" + (selectedColor=== "green" ? "glow" : "")}></div>
			</div>

	);
}

export default Home;
