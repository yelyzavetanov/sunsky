import React, {useEffect, useState} from "react";
import s from "./WeatherForHour.module.css";
import weatherIcon from "../../../../img/weatherIcons/static/cloudy-night-2.svg";

const WeatherForHour = (props) => {
    const [isTheNewDay] =  useState(props.time[0] === "0");
    const [isTheCurrentHour] = useState(props.time === props.currentHour);

    // useEffect(() => {}, [props.currentHour]);

    // console.log(isTheCurrentHour);
    // console.log(props.currentHour);

    // const getItemClass = () => {
    //
    // }

    return (
        <div className={isTheNewDay || isTheCurrentHour ? s.weatherForNewDayHour : s.weatherForHour}>
            <div className={s.time}>{props.time}</div>
            <div className={s.temperature}>{props.temperature}</div>
            <div className={s.description}><img alt={""} src={weatherIcon}/>{props.description}</div>
            <div className={s.humidity}>{props.humidity}</div>
            <div className={s.wind}>{props.wind}</div>
            {/*weather for hour*/}
        </div>
    )
}

export default WeatherForHour;