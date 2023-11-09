import React from "react";
import s from "./TodayWeather.module.css";
import WeatherPreview from "./WeatherPreview/WeatherPreview";
import WeatherIcons from "./WeatherIcons/WeatherIcons";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

const TodayWeather = () => {
    return (
        <div className={s.todayWeatherBlock}>
            <WeatherPreview/>
            <WeatherIcons/>
            <WeatherDetails/>
        </div>
    )
}

export default TodayWeather;