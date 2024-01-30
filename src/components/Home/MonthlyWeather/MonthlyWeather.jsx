import React, {useState} from "react";
import s from "./MonthlyWeather.module.css";
import arrowIcon from "../../../img/icon/arrow02.svg";
import Calendar from "./Calendar/Calendar";
import SelectedCalendarDay from "./SelectedCalendarDay/SelectedCalendarDay";

// import * as am5 from "@amcharts/amcharts5";
// import * as am5xy from "@amcharts/amcharts5/xy";
// import * as am5percent from "@amcharts/amcharts5/percent";

const MonthlyWeather = (props) => {
    const [selectedDayIndex, setSelectedDayIndex] = useState(10);
    const [year, setYear] = useState(2024);

    const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December",];

    let monthWeatherArray = props.calendar;

    let previousMonth;
    let nextMonth;

    if (months.indexOf(monthWeatherArray[10].month) === 0) {
        previousMonth = months[months.length - 1];
    } else {
        previousMonth = months[months.indexOf(monthWeatherArray[10].month) - 1];
    }
    if (months.indexOf(monthWeatherArray[10].month) === months.length - 1) {
        nextMonth = months[0];
    } else {
        nextMonth = months[months.indexOf(monthWeatherArray[10].month) + 1];
    }

    const changeMonth = (month) => {
        props.changeCalendarMonth(month);

        if (month === "January" && nextMonth === "January") {
            setYear(year + 1);
        } else if (month === "December" && previousMonth === "December") {
            setYear(year - 1);
        }
    }

    const changeYear = (year) => {
        setYear(year);
        props.changeCalendarMonth(monthWeatherArray[10].month);
    }


/*    const root = am5.Root.new("chartdiv");
    const chart = am5percent.PieChart.new(root, {});
    root.container.children.push(chart);

    const series = chart.series.push(
        am5percent.PieSeries.new(root, {})
    );
    series.set("valueField", "value");
    series.set("categoryField", "category");

    series.data.setAll([{
        category: "Research",
        value: 1000
    }, {
        category: "Marketing",
        value: 1200
    }, {
        category: "Sales",
        value: 850
    }]);

    root.dispose();*/


    return (
        <div className={s.monthlyWeather}>

            <div id={"chartdiv"}>

            </div>

            <div className={s.title}>Weather for {monthWeatherArray[10].month} {year} in your city</div>
            <div className={s.selectYearContainer}>
                <div className={s.selectArrowLeftContainer} onClick={() => changeYear(year - 1)}>
                    <img alt={""} src={arrowIcon}/>
                    {year - 1}
                </div>
                <div className={s.yearContainer}>{year}</div>
                <div className={s.selectArrowRightContainer} onClick={() => changeYear(year + 1)}>
                    {year + 1}
                    <img alt={""} src={arrowIcon}/>
                </div>
            </div>
            <div className={s.selectMonthContainer}>
                <div className={s.selectArrowLeftContainer} onClick={() => changeMonth(previousMonth)}>
                    <img alt={""} src={arrowIcon}/>
                    {previousMonth}
                </div>
                <div className={s.monthContainer}>{monthWeatherArray[10].month}</div>
                <div className={s.selectArrowRightContainer} onClick={() => changeMonth(nextMonth)}>
                    {nextMonth}
                    <img alt={""} src={arrowIcon}/>
                </div>
            </div>
            <Calendar weatherIcons={props.weatherIcons} setSelectedDayIndex={setSelectedDayIndex} monthWeatherArray={monthWeatherArray}/>
            <SelectedCalendarDay weatherIcons={props.weatherIcons} selectedDay={monthWeatherArray[selectedDayIndex]}/>
        </div>
    )
}

export default MonthlyWeather;