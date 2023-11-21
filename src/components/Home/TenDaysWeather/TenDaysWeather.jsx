import React from "react";
import s from "./TenDaysWeather.module.css";
import DayWeather from "./DayWeather/DayWeather";
import {randomizeTenDaysWeather} from "../../WeatherRandomizer/weatherRandomizer";

const TenDaysWeather = () => {
    const tenDaysWeatherArray = randomizeTenDaysWeather();

    return (
        <div className={s.tenDaysWeather}>
            <div className={s.title}>
                <span>Weather for 10 days</span>
                <span>20-30th June 2023</span>
            </div>
            {tenDaysWeatherArray.map( e =>
                <DayWeather
                    key={tenDaysWeatherArray.indexOf(e)}
                    weatherInfo={e}
                />
            )}
        </div>
    )
}

export default TenDaysWeather;