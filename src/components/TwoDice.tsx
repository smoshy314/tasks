/* eslint-disable no-extra-parens */
import React, { useState } from "react";
import { Button } from "react-bootstrap";

/**
 * Here is a helper function you *must* use to "roll" your die.
 * The function uses the builtin `random` function of the `Math`
 * module (which returns a random decimal between 0 up until 1) in order
 * to produce a random integer between 1 and 6 (inclusive).
 */
export function d6(): number {
    return 1 + Math.floor(Math.random() * 6);
}

export function TwoDice(): JSX.Element {
    const [uno, setUno] = useState<number>(1);
    const [dos, setDos] = useState<number>(6);
    return (
        <div>
            <span data-testid="left-die">{uno}</span>
            <span data-testid="right-die">{dos}</span>
            <Button onClick={() => setUno(d6())}>Roll Left</Button>
            <Button onClick={() => setDos(d6())}>Roll Right</Button>
            {uno === dos ? (
                !(uno === 1 && dos === 1) ? (
                    <div>You Win</div>
                ) : (
                    <div>You Lose</div>
                )
            ) : (
                <div></div>
            )}
        </div>
    );
}
