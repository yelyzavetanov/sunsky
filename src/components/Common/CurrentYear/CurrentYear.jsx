import React from "react";
import s from "./CurrentYear.module.css";

function CurrentYear () {
    const currentDate = new Date();

    return (
        <span className={s.currentYear}>{currentDate.getFullYear()}</span>
    )
}

export default CurrentYear;