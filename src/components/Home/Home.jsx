import React from "react";
import s from "./Home.module.css";
import TodayWeather from "./TodayWeather/TodayWeather";
import HourlyWeather from "./HourlyWeather/HourlyWeather";
import {Routes, Route} from "react-router-dom";
import TenDaysWeather from "./TenDaysWeather/TenDaysWeather";
import MonthlyWeather from "./MonthlyWeather/MonthlyWeather";

const Home = () => {
    return (
        <div className={s.home}>
            <Routes>
                <Route path={"/hourlyWeather"} element={<HourlyWeather/>}/>
                <Route path={"/tenDaysWeather"} element={<TenDaysWeather/>}/>
                <Route path={"/monthlyWeather"} element={<MonthlyWeather/>}/>
                <Route path={"/"} element={<TodayWeather/>}/>
            </Routes>
        </div>
    )
}

export default Home;