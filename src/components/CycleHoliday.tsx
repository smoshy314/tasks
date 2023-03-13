import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    const [holiday, setHoliday] = useState<
        "NewYears" | "MyBirthday" | "Christmas" | "Thanksgiving" | "Easter"
    >("NewYears");
    function nextHolidayAlpha() {
        holiday === "Christmas" ? setHoliday("Easter") : null;
        holiday === "Easter" ? setHoliday("MyBirthday") : null;
        holiday === "MyBirthday" ? setHoliday("NewYears") : null;
        holiday === "NewYears" ? setHoliday("Thanksgiving") : null;
        holiday === "Thanksgiving" ? setHoliday("Christmas") : null;
    }
    function nextHolidayChron() {
        holiday === "NewYears" ? setHoliday("Easter") : null;
        holiday === "Easter" ? setHoliday("MyBirthday") : null;
        holiday === "MyBirthday" ? setHoliday("Thanksgiving") : null;
        holiday === "Thanksgiving" ? setHoliday("Christmas") : null;
        holiday === "Christmas" ? setHoliday("NewYears") : null;
    }
    return (
        <div>
            <Button onClick={nextHolidayAlpha}>Advance by Alphabet</Button>
            <Button onClick={nextHolidayChron}>Advance by Year</Button>
            {holiday === "NewYears" ? (
                <div>Holiday: 🎉</div>
            ) : holiday === "MyBirthday" ? (
                <div>Holiday: 🎂</div>
            ) : holiday === "Easter" ? (
                <div>Holiday: 🪺</div>
            ) : holiday === "Thanksgiving" ? (
                <div>Holiday: 🦃</div>
            ) : holiday === "Christmas" ? (
                <div>Holiday: 🎄</div>
            ) : null}
        </div>
    );
}
