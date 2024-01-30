import React from "react";
import s from "./TenDaysWeather.module.css";
import DayWeather from "./DayWeather/DayWeather";
import TenDaysWeatherChart from "../../Common/WeatherChart/TenDaysWeatherChart/TenDaysWeatherChart";
import {monthDays, months} from "../../weatherRandomizer/monthsArray";

const TenDaysWeather = (props) => {
    const tenDaysWeatherArray = props.tenDaysWeather;

    const getTitleDate = () => {
        const currentDate = new Date;

        let titleDate;
        const todayDate = props.tenDaysWeather[0].date;
        const todayMonth = props.tenDaysWeather[0].month;
        const todayMonthDays = monthDays.filter(m => m.month === todayMonth)[0].days;
        const todayYear = currentDate.getFullYear();

        if (todayDate > todayMonthDays - 10 && todayMonth === "December") {
            const endDate = 10 - (todayMonthDays - todayDate);
            titleDate =
                todayDate + "th " + todayMonth + " " + todayYear + " - " + endDate + "th " + "January" + " " + (todayYear + 1);
        } else if (todayDate > todayMonthDays - 10) {
            const endDate = 10 - (todayMonthDays - todayDate);
            const nextMonth = months[currentDate.getMonth()+1];
            titleDate =
                todayDate + "th " + todayMonth + " " + " - " + endDate + "th " + nextMonth + " " + todayYear;
        } else {
            const endDate = todayDate + 10;
            titleDate = todayDate + "th " + " - " + endDate + "th " + todayMonth + " " + todayYear;
        }

        return titleDate;
    }

    return (
        <div className={s.tenDaysWeather}>
            <div className={s.title}>
                <span>Weather for 10 days</span>
                <span>
                    {getTitleDate()}
                </span>
            </div>
            <TenDaysWeatherChart tenDaysWeather={tenDaysWeatherArray}/>
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