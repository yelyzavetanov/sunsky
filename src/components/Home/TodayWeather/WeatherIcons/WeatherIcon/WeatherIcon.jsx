import React from "react";
import s from "./WeatherIcon.module.css";

const WeatherIcon = (props) => {
    return (
        <div className={s.weatherIcon}>
            <div>{props.time}</div>
            {
                props.isNight
                ? <img alt={""} src={props.weatherIcons.night[props.weatherDescription]}/>
                : <img alt={""} src={props.weatherIcons.day[props.weatherDescription]}/>
            }
            <div>{props.weatherDescription}</div>
        </div>
    )
}

export default WeatherIcon;