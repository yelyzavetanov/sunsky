import React, {useState} from "react";
import s from "./DayWeather.module.css";
import weatherIcon from "../../../../img/weatherIcons/static/night.svg";
import HalfDayWeather from "./HalfDayWeather/HalfDayWeather";

const DayWeather = (props) => {
    const [areMoreDetailsOpened, setAreMoreDetailsOpened] = useState(false);

    return (
        <div className={areMoreDetailsOpened ? s.openedDayWeatherContainer : s.dayWeatherContainer}>
            <div className={s.dayWeather}>
                <div className={s.day}>{props.weatherInfo.date} {props.weatherInfo.week}</div>
                <div className={s.temperature}>{props.weatherInfo.day.temperature}</div>
                <div className={s.description}>
                    <img alt={""} src={weatherIcon}/>
                    {props.weatherInfo.day.description}
                </div>
                <div className={s.humidity}>{props.weatherInfo.day.humidity}</div>
                <div className={s.wind}>{props.weatherInfo.day.wind}</div>
                <div
                    className={s.moreDetailsButton}
                    onClick={() => setAreMoreDetailsOpened(!areMoreDetailsOpened)}
                >
                    {areMoreDetailsOpened ? "less" : "more"}
                </div>
            </div>
            {areMoreDetailsOpened && <div className={s.detailsContainer}>
                <HalfDayWeather
                    dayTime={"day"}
                    weatherInfo={props.weatherInfo.day}
                    date={props.weatherInfo.date}
                    week={props.weatherInfo.week}
                />
                <HalfDayWeather
                    dayTime={"night"}
                    weatherInfo={props.weatherInfo.night}
                    date={props.weatherInfo.date}
                    week={props.weatherInfo.week}
                />
            </div>}
        </div>
    )
}

export default DayWeather;