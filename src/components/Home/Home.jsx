import React from "react";
import s from "./Home.module.css";
import TodayWeather from "./TodayWeather/TodayWeather";

const Home = () => {
    return (
        <div className={s.home}>
            <TodayWeather/>
        </div>
    )
}

export default Home;