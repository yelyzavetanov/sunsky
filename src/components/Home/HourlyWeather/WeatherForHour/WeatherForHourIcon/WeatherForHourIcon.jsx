import React from "react";
import s from "./WeatherForHourIcon.module.css";

const WeatherForHourIcon = (props) => {
    const isNight =
        (props.time[0] < 7 && props.time[2] === "A")
        ||
        (Number(props.time[0] + props.time[1]) > 8 && props.time[props.time.length - 2] === "P");

    return (
        <div className={s.weatherForHourIcon}>
            {
                isNight
                    ? <img alt={""} src={props.weatherIcons.night[props.description]}/>
                    : <img alt={""} src={props.weatherIcons.day[props.description]}/>
            }
        </div>
    )
}

export default WeatherForHourIcon;