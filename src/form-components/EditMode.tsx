import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): JSX.Element {
    const [name, setName] = useState<string>("Your Name");
    const [student, setStudent] = useState<boolean>(true);
    const [editMode, setEditMode] = useState<boolean>(false);
    function updateName(event: React.ChangeEvent<HTMLInputElement>) {
        setName(event.target.value);
    }
    return (
        <div>
            <Form.Check
                type="switch"
                label="Edit"
                checked={editMode}
                onChange={() => setEditMode(!editMode)}
            />
            {editMode ? (
                <div>
                    <Form.Group controlId="formEditMode">
                        <Form.Label>Name:</Form.Label>
                        <Form.Control value={name} onChange={updateName} />
                    </Form.Group>
                    <Form.Check
                        type="checkbox"
                        id="is-student-check"
                        label="Are you a student?"
                        checked={student}
                        onChange={() => setStudent(!student)}
                    />
                </div>
            ) : (
                <div>
                    {student ? (
                        <div>{name} is a Student</div>
                    ) : (
                        <div>{name} is not a student</div>
                    )}
                </div>
            )}
        </div>
    );
}
