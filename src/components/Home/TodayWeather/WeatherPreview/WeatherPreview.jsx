import React from "react";
import s from "./WeatherPreview.module.css";
import weatherIcon from "../../../../img/weatherIcons/static/cloudy.svg";

const WeatherPreview = () => {
    return (
        <div className={s.weatherPreview}>
            <div className={s.cityContainer}>
                Your city, your country
            </div>
            <div className={s.weatherInformation}>
                <div className={s.mainInformation}>
                    <div className={s.mainTemperature}>28°</div>
                    <div className={s.temperature}>Day: 31° Night:25°</div>
                </div>
                <div className={s.weatherDescription}>
                    <div><img className={s.weatherIconImg} alt={""} src={weatherIcon}/></div>
                    <div>cloudy</div>
                </div>
            </div>
        </div>
    )
}

export default WeatherPreview;