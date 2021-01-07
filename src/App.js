import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import DropDown from "./components/DropDown";

const items = [
	{
		title: "React",
		content: "React is a famouse JS libraray"
	},
	{
		title: "Angular",
		content: "Angular is a JS framework"
	},
	{
		title: "Vue",
		content: "Worse framework among others"
	}
];

const options = [
	{
		label: "The color of red",
		value: "red"
	},
	{
		label: "Beauty in black",
		value: "black"
	},
	{
		label: "Olive green is fav",
		value: "oliveGreen"
	}
];

const App = () => {
	return (
		<div>
			{/* <Search />
			<Accordion items={items} /> */}
			<DropDown options={options} />
		</div>
	)
}

export default App;
