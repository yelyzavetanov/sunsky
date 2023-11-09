import React from "react";
import s from "./WeatherDetails.module.css";

const WeatherDetails = () => {
    return (
        <div className={s.weatherDetails}>
            <div className={s.cityContainer}>Weather today in your city</div>
            <div className={s.detailsContainer}>
                <div className={s.temperatureContainer}>
                    {/*<div className={s.title}>Feels like:</div>*/}
                    {/*<div className={s.temperature}>32°</div>*/}
                    <div className={s.weatherDetailsItem}>
                        <span className={s.title}>Feels like:</span>
                        <span className={s.temperature}>32°</span>
                    </div>
                    <div className={s.weatherDetailsItem}><span>Sunrise:</span><span>6:00 AM</span></div>
                    <div className={s.weatherDetailsItem}><span>Sunset:</span><span>6:00 PM</span></div>
                </div>
                <div className={s.itemsContainer}>
                    <div className={s.weatherDetailsItem}><span>Humidity:</span><span>80%</span></div>
                    <div className={s.weatherDetailsItem}><span>Wind:</span><span>14 km/h</span></div>
                    <div className={s.weatherDetailsItem}><span>Pressure:</span><span>1017.6 mb</span></div>
                    <div className={s.weatherDetailsItem}><span>Visibility:</span><span>unlimited</span></div>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails;