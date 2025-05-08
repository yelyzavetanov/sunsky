import React from "react";
import s from "./WeatherPreview.module.css";
import CurrentYear from "../../../Common/CurrentYear/CurrentYear";

const WeatherPreview = (props) => {
    const weather = props.todayWeather;

    return (
        <div className={s.weatherPreview}>
            <div className={s.cityContainer}>
                <span>{props.location.city}, {props.location.country}</span>
                <span>{weather.date}th {weather.month} <CurrentYear/></span>
            </div>
            <div className={s.weatherInformation}>
                <div className={s.mainInformation}>
                    <div className={s.mainTemperature}>{weather.day.temperature}</div>
                    <div className={s.temperature}>
                        Day: {weather.day.temperature} Night: {weather.night.temperature}
                    </div>
                </div>
                <div className={s.weatherDescription}>
                    <div className={s.iconContainer}>
                        <img className={s.weatherIconImg} alt={""} src={props.weatherIcons.day[props.todayWeather.day.description]}/>
                    </div>
                    <div>{weather.day.description}</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherPreview;