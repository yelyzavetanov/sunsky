import React from "react";
import s from "./WeatherIcons.module.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";

const WeatherIcons = (props) => {
    const weatherIconsInfo = [
        {time: "Morning", isNight: false, description: props.todayWeather.morning},
        {time: "Afternoon", isNight: false, description: props.todayWeather.day.description},
        {time: "Evening", isNight: true, description: props.todayWeather.evening},
        {time: "Overnight", isNight: true, description: props.todayWeather.night.description},
    ];

    return (
        <div className={s.weatherIcons}>
            <div className={s.cityContainer}>Weather forecast for today in {props.location.city}</div>
            <div className={s.iconsContainer}>
                {weatherIconsInfo.map( e =>
                    <WeatherIcon
                        weatherIcons={props.weatherIcons}
                        weatherDescription={e.description}
                        time={e.time}
                        isNight={e.isNight}
                        key={e.time}
                    />
                )}
            </div>
        </div>
    )
}

export default WeatherIcons;