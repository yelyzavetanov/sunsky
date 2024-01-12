import React, {useEffect, useState} from "react";
import s from "./WeatherForHour.module.css";
import weatherIcon from "../../../../img/weatherIcons/static/cloudy-night-2.svg";

const WeatherForHour = (props) => {
    const [isTheNewDay] =  useState(props.time[0] === "0");
    const [isTheCurrentHour] = useState(props.time === props.currentHour);

    return (
        <div className={isTheNewDay || isTheCurrentHour ? s.weatherForNewDayHour : s.weatherForHour}>
            <div className={s.time}>{props.time}</div>
            <div className={s.temperature}>{props.temperature}</div>
            <div className={s.description}>
                <img alt={""} src={props.weatherIcons[props.description]}/>
                {props.description}
            </div>
            <div className={s.humidity}>{props.humidity}</div>
            <div className={s.wind}>{props.wind}</div>
        </div>
    )
}

export default WeatherForHour;