import React from "react";
import s from "./HourlyWeather.module.css";
import WeatherForHour from "./WeatherForHour/WeatherForHour";
import {months} from "../../weatherRandomizer/monthsArray";
import CurrentYear from "../../Common/CurrentYear/CurrentYear";

const HourlyWeather = (props) => {
    const hoursWeatherArray = props.hourlyWeather

    let time = new Date();
    const currentHour = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });

    return (

        <div className={s.hourlyWeather}>
            <div className={s.title}>
                <span>Hourly weather in your city today</span>
                <span>
                    {time.getDate()}th {months[time.getMonth()]} <CurrentYear/>
                </span>
            </div>
            <div className={s.itemsContainer}>
                {hoursWeatherArray.map( e =>
                    <WeatherForHour
                        weatherIcons={props.weatherIcons}
                        key={hoursWeatherArray.indexOf(e)}
                        time={e.hour}
                        temperature={e.temperature}
                        description={e.description}
                        humidity={e.humidity}
                        wind={e.wind}
                        currentHour={currentHour}
                    />
                )}
            </div>
        </div>
    )
}

export default HourlyWeather;