import React from "react";
import s from "./SelectedCalendarDay.module.css";
import HalfDayWeather from "../../TenDaysWeather/DayWeather/HalfDayWeather/HalfDayWeather";

const SelectedCalendarDay = (props) => {
    return (
        <div className={s.selectedCalendarDay} id={"selectedDay"}>
            <div className={s.title}>
                Weather for
                {" " + props.selectedDay.date + " " + props.selectedDay.month + ", " + props.selectedDay.week}
            </div>
            <div className={s.halfDaysContainer}>
                <HalfDayWeather
                    weatherIcons={props.weatherIcons}
                    dayTime={"day"}
                    weatherInfo={props.selectedDay.day}
                    date={props.selectedDay.date}
                    week={props.selectedDay.week}
                />
                <HalfDayWeather
                    weatherIcons={props.weatherIcons}
                    dayTime={"night"}
                    weatherInfo={props.selectedDay.night}
                    date={props.selectedDay.date}
                    week={props.selectedDay.week}
                />
            </div>
        </div>
    )
}

export default SelectedCalendarDay;