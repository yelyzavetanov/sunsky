import React from "react";
import s from "./WeatherIcon.module.css";

const WeatherIcon = (props) => {
    return (
        <div className={s.weatherIcon}>
            <div>{props.children}</div>
            <div>{props.weatherDescription}</div>
        </div>
    )
}

export default WeatherIcon;