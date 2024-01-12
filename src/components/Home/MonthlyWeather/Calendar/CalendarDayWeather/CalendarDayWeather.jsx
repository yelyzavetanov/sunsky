import React from "react";
import s from "./CalendarDayWeather.module.css";

const CalendarDayWeather = (props) => {
    const onDayClick = () => {
        if (props.dayWeather) {
            props.setSelectedDayIndex(props.dayIndex);
        }
    }

    return (
        <div className={s.calendarDayWeather} onClick={onDayClick}>
            <a href={"#selectedDay"}>
                {props.dayWeather
                    ? <div className={s.shownCalendarDay}>
                        <div>{props.dayWeather.week} {props.dayWeather.date}</div>
                        <div className={s.iconContainer}><img alt={""} src={props.weatherIcons[props.dayWeather.day.description]}/></div>
                        <div>{props.dayWeather.day.description}</div>
                        <div>{props.dayWeather.day.temperature}/{props.dayWeather.night.temperature}</div>
                    </div>
                    : <div>-</div>
                }
            </a>
        </div>
    )
}

export default CalendarDayWeather;