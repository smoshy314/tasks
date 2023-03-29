import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function CheckAnswer({
    expectedAnswer
}: {
    expectedAnswer: string;
}): JSX.Element {
    // This is the State (Model)
    const [answer, setAnswer] = useState<string>("");

    // This is the Control
    function updateAnswer(event: React.ChangeEvent<HTMLInputElement>) {
        setAnswer(event.target.value);
    }

    // This is the View
    return (
        <div>
            <Form.Group controlId="formCheckAnswer">
                <Form.Label>Name:</Form.Label>
                <Form.Control value={answer} onChange={updateAnswer} />
            </Form.Group>
            {expectedAnswer === answer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
