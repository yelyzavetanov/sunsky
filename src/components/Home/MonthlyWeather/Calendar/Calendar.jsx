import React from "react";
import s from "./Calendar.module.css";
import CalendarDayWeather from "./CalendarDayWeather/CalendarDayWeather";

const Calendar = (props) => {
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
                        key={props.monthWeatherArray.indexOf(e)}
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