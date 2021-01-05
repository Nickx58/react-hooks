import React from "react";
import Accordion from "./components/Accordion";

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
        <div><Accordion items={items}/></div>
    )
}

export default App;
