import React from "react";
import s from "./WeatherPreview.module.css";

const WeatherPreview = (props) => {
    const weather = props.todayWeather;

    // console.log(weather.month);

    return (
        <div className={s.weatherPreview}>
            <div className={s.cityContainer}>
                <span>Your city, your country</span>
                <span>{weather.date}th {weather.month} 2023</span>
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