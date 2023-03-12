import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function StartAttempt(): JSX.Element {
    const [attempts, setAttempts] = useState<number>(4);
    const [progress, setProgress] = useState<boolean>(false);
    function startQuiz(): void {
        setProgress(true);
        setAttempts(attempts - 1);
    }
    return (
        <div>
            {attempts}
            {
                <Button onClick={startQuiz} disabled={progress || attempts < 1}>
                    Start Quiz
                </Button>
            }
            {
                <Button onClick={() => setProgress(false)} disabled={!progress}>
                    Stop Quiz
                </Button>
            }
            {
                <Button
                    onClick={() => setAttempts(attempts + 1)}
                    disabled={progress}
                >
                    Mulligan
                </Button>
            }
        </div>
    );
}
