import React from "react";
import s from "./HourlyWeather.module.css";
import WeatherForHour from "./WeatherForHour/WeatherForHour";

const HourlyWeather = (props) => {
    const hoursWeatherArray = props.hourlyWeather

    let time = new Date();
    const currentHour = time.toLocaleString('en-US', { hour: 'numeric', hour12: true });

    return (

        <div className={s.hourlyWeather}>
            <div className={s.title}>
                <span>Hourly weather in your city today</span>
                <span>20th June 2023</span>
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
                        // currentHour={"6 PM"}
                        currentHour={currentHour}
                    />
                )}
            </div>
        </div>
    )
}

export default HourlyWeather;