import React from "react";
import s from "./TodayWeather.module.css";
import WeatherPreview from "./WeatherPreview/WeatherPreview";
import WeatherIcons from "./WeatherIcons/WeatherIcons";
import WeatherDetails from "./WeatherDetails/WeatherDetails";

const TodayWeather = (props) => {
    // console.log(props.todayWeather);
    return (
        <div className={s.todayWeatherBlock}>
            <WeatherPreview weatherIcons={props.weatherIcons} todayWeather={props.todayWeather}/>
            <WeatherIcons weatherIcons={props.weatherIcons} todayWeather={props.todayWeather}/>
            <WeatherDetails todayWeather={props.todayWeather}/>
        </div>
    )
}

export default TodayWeather;