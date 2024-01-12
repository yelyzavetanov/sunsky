import React from "react";
import s from "./HalfDayWeather.module.css";
import weatherIcon from "../../../../../img/weatherIcons/static/night.svg";

const HalfDayWeather = (props) => {
    return (
        <div className={s.halfDayWeather}>
            <div className={s.weatherInfoContainer}>
                <div>
                    <span className={s.date}>
                        {props.date} {props.week}
                    </span>
                    {" "} | {props.dayTime}
                </div>
                <div>{props.weatherInfo.description}</div>
                <div>{props.weatherInfo.temperature}</div>
                <div>{props.weatherInfo.humidity}</div>
                <div>{props.weatherInfo.wind}</div>
            </div>
            <div>
                <div><img alt={""} src={props.weatherIcons[props.weatherInfo.description]}/></div>
            </div>
        </div>
    )
}

export default HalfDayWeather;