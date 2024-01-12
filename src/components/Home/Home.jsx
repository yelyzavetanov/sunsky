import React from "react";
import s from "./Home.module.css";
import TodayWeather from "./TodayWeather/TodayWeather";
import HourlyWeather from "./HourlyWeather/HourlyWeather";
import {Routes, Route} from "react-router-dom";
import TenDaysWeather from "./TenDaysWeather/TenDaysWeather";
import MonthlyWeather from "./MonthlyWeather/MonthlyWeather";

import clearIcon from "../../../src/img/weatherIcons/static/day.svg";
import cloudyIcon from "../../../src/img/weatherIcons/static/cloudy-day-1.svg";
import rainIcon from "../../../src/img/weatherIcons/static/rainy-6.svg";
import snowIcon from "../../../src/img/weatherIcons/static/snowy-6.svg";
import thunderstormIcon from "../../../src/img/weatherIcons/static/thunder.svg";
import fogIcon from "../../../src/img/weatherIcons/static/cloudy.svg";

const Home = (props) => {

    const weatherIcons = {
        clear: clearIcon,
        cloudy: cloudyIcon,
        rain: rainIcon,
        snow: snowIcon,
        thunderstorm: thunderstormIcon,
        fog: fogIcon,
    }

    return (
        <div className={s.home}>
            <Routes>
                <Route path={"/hourlyWeather"} element={
                    <HourlyWeather weatherIcons={weatherIcons} hourlyWeather={props.hourlyWeather}/>
                }/>
                <Route path={"/tenDaysWeather"} element={
                    <TenDaysWeather weatherIcons={weatherIcons} tenDaysWeather={props.tenDaysWeather}/>
                }/>
                <Route path={"/monthlyWeather"} element={
                    <MonthlyWeather
                        changeCalendarMonth={props.changeCalendarMonth}
                        weatherIcons={weatherIcons}
                        calendar={props.calendar}
                    />
                }/>
                <Route path={"/"} element={
                    <TodayWeather weatherIcons={weatherIcons} todayWeather={props.todayWeather}/>
                }/>
            </Routes>
        </div>
    )
}

export default Home;