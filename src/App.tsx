import React from "react";
import "./App.css";
import chicken from "./chicken.png";

function App(): JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                Joshua Martinez UD CISC275 with React Hooks and TypeScript
            </header>
            <h1>This is header text</h1>
            <img src={chicken} alt="CHICKEN" />
            <br></br>
            <br></br>
            My three Tortoises:
            <ul>
                <li>Hershey</li>
                <li>Maul</li>
                <li>Yoda</li>
            </ul>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
