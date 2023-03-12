import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { QuestionType } from "../interfaces/question";

export function ChangeType(): JSX.Element {
    const [qtype, setqtype] = useState<QuestionType>("short_answer_question");
    return (
        <div>
            <Button
                onClick={() =>
                    qtype === "short_answer_question"
                        ? setqtype("multiple_choice_question")
                        : setqtype("short_answer_question")
                }
            >
                Change Type
            </Button>
            {qtype === "short_answer_question" ? (
                <div>Short Answer</div>
            ) : (
                <div>Multiple Choice</div>
            )}
        </div>
    );
}
