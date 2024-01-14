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
                        <div>
                            <span className={s.weekDay}>{props.dayWeather.week + " "}</span>
                            {props.dayWeather.date}th
                        </div>
                        <div className={s.iconContainer}>
                            <img alt={""} src={props.weatherIcons.day[props.dayWeather.day.description]}/>
                        </div>
                        <div className={s.description}>{props.dayWeather.day.description}</div>
                        <div>
                            {props.dayWeather.day.temperature}
                            <span className={s.nightTemperature}>/{props.dayWeather.night.temperature}</span>
                        </div>
                    </div>
                    : <div>-</div>
                }
            </a>
        </div>
    )
}

export default CalendarDayWeather;