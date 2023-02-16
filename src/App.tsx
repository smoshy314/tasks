import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
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
            <Button onClick={() => console.log("Hello World!")}>
                Log Hello World
            </Button>
            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                padding: "4px",
                                width: 400,
                                height: 600,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                    <Col>
                        <div
                            style={{
                                padding: "4px",
                                width: 400,
                                height: 600,
                                backgroundColor: "red"
                            }}
                        ></div>
                    </Col>
                </Row>
            </Container>
            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload. Hello World
            </p>
        </div>
    );
}

export default App;
