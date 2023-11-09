import React from "react";
import s from "./WeatherIcons.module.css";
import WeatherIcon from "./WeatherIcon/WeatherIcon";
import iconOne from "../../../../img/weatherIcons/static/day.svg";
import iconTwo from "../../../../img/weatherIcons/static/cloudy-day-1.svg";
import iconThree from "../../../../img/weatherIcons/static/rainy-3.svg";
import iconFour from "../../../../img/weatherIcons/static/cloudy-night-1.svg";

const WeatherIcons = () => {
    return (
        <div>
            <div className={s.cityContainer}>Weather forecast for today in your city</div>
            <div className={s.iconsContainer}>
                <WeatherIcon weatherDescription={"Morning"}><img alt={""} src={iconOne}/></WeatherIcon>
                <WeatherIcon weatherDescription={"Afternoon"}><img alt={""} src={iconTwo}/></WeatherIcon>
                <WeatherIcon weatherDescription={"Evening"}><img alt={""} src={iconThree}/></WeatherIcon>
                <WeatherIcon weatherDescription={"Overnight"}><img alt={""} src={iconFour}/></WeatherIcon>
            </div>
        </div>
    )
}

export default WeatherIcons;