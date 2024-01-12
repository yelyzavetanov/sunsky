import React from "react";
import s from "./TenDaysWeather.module.css";
import DayWeather from "./DayWeather/DayWeather";

const TenDaysWeather = (props) => {
    const tenDaysWeatherArray = props.tenDaysWeather;

    return (
        <div className={s.tenDaysWeather}>
            <div className={s.title}>
                <span>Weather for 10 days</span>
                <span>20-30th June 2023</span>
            </div>
            {tenDaysWeatherArray.map( e =>
                <DayWeather
                    weatherIcons={props.weatherIcons}
                    key={tenDaysWeatherArray.indexOf(e)}
                    weatherInfo={e}
                />
            )}
        </div>
    )
}

export default TenDaysWeather;