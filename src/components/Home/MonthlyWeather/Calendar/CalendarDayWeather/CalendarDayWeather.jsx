import React, {useState} from "react";
import s from "./CalendarDayWeather.module.css";
import weatherIcon from "../../../../../img/weatherIcons/static/day.svg";

const CalendarDayWeather = (props) => {
    return (
        <div className={s.calendarDayWeather} onClick={() => props.setSelectedDayIndex(props.dayIndex)}>
            {props.dayWeather
                ? <div className={s.shownCalendarDay}>
                    <div>{props.dayWeather.week} {props.dayWeather.date}</div>
                    <div className={s.iconContainer}><img alt={""} src={weatherIcon}/></div>
                    <div>{props.dayWeather.day.description}</div>
                    <div>{props.dayWeather.day.temperature}/{props.dayWeather.night.temperature}</div>
                </div>
                : <div>-</div>
            }
        </div>
    )
}

export default CalendarDayWeather;