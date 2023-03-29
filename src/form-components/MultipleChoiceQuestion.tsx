import exp from "constants";
import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function MultipleChoiceQuestion({
    options,
    expectedAnswer
}: {
    options: string[];
    expectedAnswer: string;
}): JSX.Element {
    const DEFAULT_OPTION = options[0];
    const [selected, setSelected] = useState<string>(DEFAULT_OPTION);

    // This is the Control
    function updateSelected(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelected(event.target.value);
    }

    // This is the View
    return (
        <div>
            <h3>Multiple Choice</h3>
            <Form.Group controlId="favoriteColors">
                <Form.Label>What is your Answer?</Form.Label>
                <Form.Select value={selected} onChange={updateSelected}>
                    {options.map((option: string) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </Form.Select>
            </Form.Group>
            {selected === expectedAnswer ? <div>✔️</div> : <div>❌</div>}
        </div>
    );
}
