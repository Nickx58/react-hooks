import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";

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

const App = () => {
	return (
		<div>
			<Search />
			<Accordion items={items} />
		</div>
	)
}

export default App;
