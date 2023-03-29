import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(3);
    const [request, setRequest] = useState<string>("");
    const newAttempts = parseInt(request) || 0;
    /*
    function updateRequest(event: React.ChangeEvent<HTMLInputElement>) {
        setRequest(event.target.value);
    }*/
    return (
        <div>
            <Form.Group controlId="formGiveAttempts">
                <Form.Label>Name:</Form.Label>
                <Form.Control
                    type="number"
                    value={request}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                        setRequest(event.target.value)
                    }
                />
            </Form.Group>
            <Button
                onClick={() => setAttempts(attempts - 1)}
                disabled={attempts === 0}
            >
                Use
            </Button>
            <Button onClick={() => setAttempts(attempts + newAttempts)}>
                Gain
            </Button>
            Attempts: {attempts}
        </div>
    );
}
