import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): JSX.Element {
    // This is the State (Model)
    const colors: string[] = [
        "red",
        "blue",
        "green",
        "purple",
        "pink",
        "gray",
        "orange",
        "brown"
    ];
    const starting = colors[0];
    const [color, setColor] = useState<string>(starting);

    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            {colors.map((val: string) => (
                <Form.Check
                    inline
                    key={val}
                    type="radio"
                    name="Colors"
                    onChange={updateColor}
                    id="color"
                    label={val}
                    value={val}
                    checked={color === val}
                    style={{ backgroundColor: val }}
                ></Form.Check>
            ))}
            <span data-testid="colored-box" style={{ backgroundColor: color }}>
                Selected: {color}
            </span>
        </div>
    );
}
