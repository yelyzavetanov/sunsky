import React from "react";
import s from "./HourlyWeather.module.css";
import WeatherForHour from "./WeatherForHour/WeatherForHour";

const HourlyWeather = () => {
    const hoursWeatherArray = [
        {time: "3 PM", temperature: "30°", description: "cloudy", humidity: "50%", wind: "4 km/h",},
        {time: "4 PM", temperature: "29°", description: "cloudy", humidity: "50%", wind: "5 km/h",},
        {time: "5 PM", temperature: "29°", description: "cloudy", humidity: "55%", wind: "6 km/h",},
        {time: "6 PM", temperature: "28°", description: "cloudy", humidity: "60%", wind: "6 km/h",},
        {time: "7 PM", temperature: "27°", description: "cloudy", humidity: "60%", wind: "5 km/h",},
        {time: "8 PM", temperature: "26°", description: "cloudy", humidity: "50%", wind: "4 km/h",},
        {time: "9 PM", temperature: "25°", description: "cloudy", humidity: "50%", wind: "3 km/h",},
        {time: "10 PM", temperature: "24°", description: "cloudy", humidity: "60%", wind: "4 km/h",},
        {time: "11 PM", temperature: "23°", description: "cloudy", humidity: "60%", wind: "6 km/h",},
        {time: "0 AM", temperature: "23°", description: "cloudy", humidity: "60%", wind: "5 km/h",},
        {time: "1 AM", temperature: "23°", description: "cloudy", humidity: "60%", wind: "5 km/h",},
    ];

    // const currentDate = new Date();
    //
    // console.log(currentDate.getHours());

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
                        key={hoursWeatherArray.indexOf(e)}
                        time={e.time}
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