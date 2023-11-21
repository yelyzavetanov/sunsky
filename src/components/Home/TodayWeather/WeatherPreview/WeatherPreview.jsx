import React from "react";
import s from "./WeatherPreview.module.css";
import weatherIcon from "../../../../img/weatherIcons/static/cloudy.svg";

const WeatherPreview = () => {
    return (
        <div className={s.weatherPreview}>
            <div className={s.cityContainer}>
                <span>Your city, your country</span>
                <span>20th June 2023</span>
            </div>
            <div className={s.weatherInformation}>
                <div className={s.mainInformation}>
                    <div className={s.mainTemperature}>28°</div>
                    <div className={s.temperature}>Day: 31° Night:25°</div>
                </div>
                <div className={s.weatherDescription}>
                    <div className={s.iconContainer}><img className={s.weatherIconImg} alt={""} src={weatherIcon}/></div>
                    <div>cloudy</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherPreview;