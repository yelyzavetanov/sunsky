import React, {useState} from "react";
import s from "./WeatherForHour.module.css";
import WeatherForHourIcon from "./WeatherForHourIcon/WeatherForHourIcon";

const WeatherForHour = (props) => {
    const [isTheCurrentHour] = useState(props.time === props.currentHour);

    return (
        <div className={isTheCurrentHour ? s.weatherForNewDayHour : s.weatherForHour}>
            <div className={s.time}>{props.time}</div>
            <div className={s.temperature}>{props.temperature}</div>
            <div className={s.description}>
                <WeatherForHourIcon weatherIcons={props.weatherIcons} time={props.time} description={props.description}/>
                {props.description}
            </div>
            <div className={s.humidity}>{props.humidity}</div>
            <div className={s.wind}>{props.wind}</div>
        </div>
    )
}

export default WeatherForHour;