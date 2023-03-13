import React, { useState } from "react";
import { Button } from "react-bootstrap";

interface setValueProps {
    dhValue: number;
    setValue: (expression: number) => void;
}

function Doubler({ dhValue, setValue }: setValueProps): JSX.Element {
    return <Button onClick={() => setValue(2 * dhValue)}>Double</Button>;
}

function Halver({ dhValue, setValue }: setValueProps): JSX.Element {
    return <Button onClick={() => setValue(0.5 * dhValue)}>Halve</Button>;
}

export function DoubleHalf(): JSX.Element {
    const [dhValue, setDhValue] = useState<number>(10);
    return (
        <div>
            <h3>Double Half</h3>
            <div>
                The current value is: <span>{dhValue}</span>
            </div>
            <Doubler dhValue={dhValue} setValue={setDhValue}></Doubler>
            <Halver dhValue={dhValue} setValue={setDhValue}></Halver>
        </div>
    );
}
