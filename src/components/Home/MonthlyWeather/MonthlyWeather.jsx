import React, {useEffect, useState} from "react";
import s from "./MonthlyWeather.module.css";
import arrowIcon from "../../../img/icon/arrow02.svg";
import Calendar from "./Calendar/Calendar";
import {randomizeCalendar} from "../../WeatherRandomizer/weatherRandomizer";
import SelectedCalendarDay from "./SelectedCalendarDay/SelectedCalendarDay";

const MonthlyWeather = () => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(10);

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",];

    let monthWeatherArray = randomizeCalendar("June");

    let previousMonth;

    let nextMonth;
    if (months.indexOf(monthWeatherArray[10].month) === 0) {

        previousMonth = months[months.length - 1];
    } else {
        previousMonth = months[months.indexOf(monthWeatherArray[10].month) - 1];
    }
    if (months.indexOf(monthWeatherArray[10].month) === months.length - 1) {

        nextMonth = months[0];
    } else {
        nextMonth = months[months.indexOf(monthWeatherArray[10].month) + 1];
    }

    const onPreviousMonthClick = () => {
        monthWeatherArray = randomizeCalendar(previousMonth);
        console.log(monthWeatherArray[10].month);
    }
    const onNextMonthClick = () => {
        monthWeatherArray = randomizeCalendar(nextMonth);
    }

    useEffect(() => {
        console.log("rerender")
    }, [monthWeatherArray]);

    return (
        <div className={s.monthlyWeather}>
            <div className={s.title}>Weather for the month in your city</div>
            <div className={s.selectMonthContainer}>
                <div className={s.monthArrowLeftContainer} onClick={onPreviousMonthClick}>
                    <img alt={""} src={arrowIcon}/>
                    {previousMonth}
                </div>
                <div>{monthWeatherArray[10].month}</div>
                <div className={s.monthArrowRightContainer} onClick={onNextMonthClick}>
                    {nextMonth}
                    <img alt={""} src={arrowIcon}/>
                </div>
            </div>
            <Calendar setSelectedDayIndex={setSelectedDayIndex} monthWeatherArray={monthWeatherArray}/>
            <SelectedCalendarDay selectedDay={monthWeatherArray[selectedDayIndex]}/>
        </div>
    )
}

export default MonthlyWeather;