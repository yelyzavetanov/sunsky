import React, {useState} from "react";
import s from "./Calendar.module.css";
import CalendarDayWeather from "./CalendarDayWeather/CalendarDayWeather";

const Calendar = (props) => {
    let nullDayNumber = 0;

    const generateDayKey = (element) => {
        if (!element) {
            nullDayNumber++;
            return "nullDay" + nullDayNumber;
        } else {
            return props.monthWeatherArray.indexOf(element);
        }
    }

    return (
        <div className={s.calendarContainer}>
            <div className={s.weekRow}>
                <div>SUN</div>
                <div>MON</div>
                <div>TUE</div>
                <div>WED</div>
                <div>THU</div>
                <div>FRI</div>
                <div>SAT</div>
            </div>
            <div className={s.calendar}>
                {props.monthWeatherArray.map(e =>
                    <CalendarDayWeather
                        weatherIcons={props.weatherIcons}
                        key={generateDayKey(e)}
                        dayWeather={e}
                        setSelectedDayIndex={props.setSelectedDayIndex}
                        dayIndex={props.monthWeatherArray.indexOf(e)}
                    />
                )}
            </div>
        </div>
    )
}

export default Calendar;