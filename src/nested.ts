import Q from "q";
import { Z_FILTERED } from "zlib";
import { Answer } from "./interfaces/answer";
import { Question, QuestionType } from "./interfaces/question";
import { duplicateQuestion, makeBlankQuestion } from "./objects";

/**
 * Consumes an array of questions and returns a new array with only the questions
 * that are `published`.
 */
export function getPublishedQuestions(questions: Question[]): Question[] {
    const published = questions.filter(
        (question: Question): boolean => question.published
    );
    return published;
}

/**
 * Consumes an array of questions and returns a new array of only the questions that are
 * considered "non-empty". An empty question has an empty string for its `body` and
 * `expected`, and an empty array for its `options`.
 */
export function getNonEmptyQuestions(questions: Question[]): Question[] {
    const newVar = questions.filter(
        (question: Question): boolean =>
            question.body.length > 0 || question.expected.length > 0
    );
    return newVar;
}

/***
 * Consumes an array of questions and returns the question with the given `id`. If the
 * question is not found, return `null` instead.
 */
export function findQuestion(
    questions: Question[],
    id: number
): Question | null {
    const theQ = questions.findIndex(
        (question: Question): boolean => question.id === id
    );
    return theQ === -1 ? null : questions[theQ];
}

/**
 * Consumes an array of questions and returns a new array that does not contain the question
 * with the given `id`.
 */
export function removeQuestion(questions: Question[], id: number): Question[] {
    const index = questions.findIndex(
        (question: Question): boolean => question.id === id
    );
    const final = [...questions];
    final.splice(index, 1);
    return final;
}

/***
 * Consumes an array of questions and returns a new array containing just the names of the
 * questions, as an array.
 */
export function getNames(questions: Question[]): string[] {
    const newA = questions.map((question: Question): string => question.name);
    return newA;
}

/***
 * Consumes an array of questions and returns the sum total of all their points added together.
 */
export function sumPoints(questions: Question[]): number {
    const sum = questions.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions and returns the sum total of the PUBLISHED questions POINTS.
 */
export function sumPublishedPoints(questions: Question[]): number {
    const filtered = questions.filter(
        (question: Question): boolean => question.published
    );
    const sum = filtered.reduce(
        (currentTotal: number, question: Question) =>
            currentTotal + question.points,
        0
    );
    return sum;
}

/***
 * Consumes an array of questions, and produces a Comma-Separated Value (CSV) string representation.
 * A CSV is a type of file frequently used to share tabular data; we will use a single string
 * to represent the entire file. The first line of the file is the headers "id", "name", "options",
 * "points", and "published". The following line contains the value for each question, separated by
 * commas. For the `options` field, use the NUMBER of options.
 *
 * Here is an example of what this will look like (do not include the border).
 *`
id,name,options,points,published
1,Addition,0,1,true
2,Letters,0,1,false
5,Colors,3,1,true
9,Shapes,3,2,false
` *
 * Check the unit tests for more examples!
 */
export function toCSV(questions: Question[]): string {
    //const newA = questions.map((question: Question): string =>  question.id + "," + question.name + "," + question.options + "," + question.points+ "," + question.published + "\n")
    const newA = questions.map(
        (question: Question): string =>
            `${question.id},${question.name},${question.options.reduce(
                (currentTotal: number) => currentTotal + 1,
                0
            )},${question.points},${question.published}`
    );
    return "id,name,options,points,published\n" + newA.join("\n");
}

/**
 * Consumes an array of Questions and produces a corresponding array of
 * Answers. Each Question gets its own Answer, copying over the `id` as the `questionId`,
 * making the `text` an empty string, and using false for both `submitted` and `correct`.
 */
export function makeAnswers(questions: Question[]): Answer[] {
    const answers = questions.map(
        (question: Question): Answer => ({
            questionId: question.id,
            text: "",
            submitted: false,
            correct: false
        })
    );
    return answers;
}

/***
 * Consumes an array of Questions and produces a new array of questions, where
 * each question is now published, regardless of its previous published status.
 */
export function publishAll(questions: Question[]): Question[] {
    const newQ = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: [...question.options],
            expected: question.expected,
            points: question.points,
            published: true
        })
    );
    return newQ;
}

/***
 * Consumes an array of Questions and produces whether or not all the questions
 * are the same type. They can be any type, as long as they are all the SAME type.
 */
export function sameType(questions: Question[]): boolean {
    if (questions.length === 0) {
        return true;
    }
    const firstType = questions[0].type;
    const anyQ = questions.findIndex(
        (question: Question): boolean => question.type != firstType
    );
    return anyQ > 0 ? false : true;
}

/***
 * Consumes an array of Questions and produces a new array of the same Questions,
 * except that a blank question has been added onto the end. Reuse the `makeBlankQuestion`
 * you defined in the `objects.ts` file.
 */
export function addNewQuestion(
    questions: Question[],
    id: number,
    name: string,
    type: QuestionType
): Question[] {
    const newQs = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: [...question.options],
            expected: question.expected,
            points: question.points,
            published: question.published
        })
    );
    return [...newQs, makeBlankQuestion(id, name, type)];
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its name should now be `newName`.
 */
export function renameQuestionById(
    questions: Question[],
    targetId: number,
    newName: string
): Question[] {
    const targetIdI = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const copyQuestions = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: [...question.options],
            expected: question.expected,
            points: question.points,
            published: question.published
        })
    );
    if (targetIdI >= 0) {
        copyQuestions.splice(targetIdI, 1, {
            id: questions[targetIdI].id,
            name: newName,
            body: questions[targetIdI].body,
            type: questions[targetIdI].type,
            options: [...questions[targetIdI].options],
            expected: questions[targetIdI].expected,
            points: questions[targetIdI].points,
            published: questions[targetIdI].published
        });
    }
    return copyQuestions;
}

/***
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `type` should now be the `newQuestionType`
 * AND if the `newQuestionType` is no longer "multiple_choice_question" than the `options`
 * must be set to an empty list.
 */
export function changeQuestionTypeById(
    questions: Question[],
    targetId: number,
    newQuestionType: QuestionType
): Question[] {
    const targetIdI = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const copyQuestions = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: [...question.options],
            expected: question.expected,
            points: question.points,
            published: question.published
        })
    );
    if (targetIdI >= 0) {
        copyQuestions.splice(targetIdI, 1, {
            id: questions[targetIdI].id,
            name: questions[targetIdI].name,
            body: questions[targetIdI].body,
            type: newQuestionType,
            options:
                newQuestionType === "short_answer_question"
                    ? []
                    : [...questions[targetIdI].options],
            expected: questions[targetIdI].expected,
            points: questions[targetIdI].points,
            published: questions[targetIdI].published
        });
    }
    return copyQuestions;
}

/**
 * Consumes an array of Questions and produces a new array of Questions, where all
 * the Questions are the same EXCEPT for the one with the given `targetId`. That
 * Question should be the same EXCEPT that its `option` array should have a new element.
 * If the `targetOptionIndex` is -1, the `newOption` should be added to the end of the list.
 * Otherwise, it should *replace* the existing element at the `targetOptionIndex`.
 *
 * Remember, if a function starts getting too complicated, think about how a helper function
 * can make it simpler! Break down complicated tasks into little pieces.
 */
export function editOption(
    questions: Question[],
    targetId: number,
    targetOptionIndex: number,
    newOption: string
): Question[] {
    const targetIdI = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const copyQuestions = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: [...question.options],
            expected: question.expected,
            points: question.points,
            published: question.published
        })
    );
    if (targetIdI >= 0) {
        const copyO = [...questions[targetIdI].options];
        targetOptionIndex === -1
            ? copyO.splice(copyO.length, 0, newOption)
            : copyO.splice(targetOptionIndex, 1, newOption);
        copyQuestions.splice(targetIdI, 1, {
            id: questions[targetIdI].id,
            name: questions[targetIdI].name,
            body: questions[targetIdI].body,
            type: questions[targetIdI].type,
            // I broke prettier/prettier it created an endless loop with indent errors
            // eslint-disable-next-line prettier/prettier
            options: copyO,
            expected: questions[targetIdI].expected,
            points: questions[targetIdI].points,
            published: questions[targetIdI].published
        });
    }
    return copyQuestions;
}

/***
 * Consumes an array of questions, and produces a new array based on the original array.
 * The only difference is that the question with id `targetId` should now be duplicated, with
 * the duplicate inserted directly after the original question. Use the `duplicateQuestion`
 * function you defined previously; the `newId` is the parameter to use for the duplicate's ID.
 */
export function duplicateQuestionInArray(
    questions: Question[],
    targetId: number,
    newId: number
): Question[] {
    const targetIdI = questions.findIndex(
        (question: Question): boolean => question.id === targetId
    );
    const copyQuestions = questions.map(
        (question: Question): Question => ({
            id: question.id,
            name: question.name,
            body: question.body,
            type: question.type,
            options: [...question.options],
            expected: question.expected,
            points: question.points,
            published: question.published
        })
    );

    if (targetIdI >= 0) {
        copyQuestions.splice(
            targetIdI + 1,
            0,
            duplicateQuestion(newId, questions[targetIdI])
        );
    }
    return copyQuestions;
}
