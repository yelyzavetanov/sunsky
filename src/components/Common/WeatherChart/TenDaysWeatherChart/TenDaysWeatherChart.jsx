import React from "react";
import s from "./TenDaysWeatherChart.module.css";
import {Chart as ChartJS} from "chart.js/auto";
import {Line} from "react-chartjs-2";

function TenDaysWeatherChart (props) {

    const setGradient = (context, color) => {
            const bgColor = [color, "#ffffff00"];

            if (!context.chart.chartArea) {
                return 0;
            }

            const {ctx, data, chartArea: {top, bottom}} = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(1, bgColor[1]);

            return gradientBg;
        }

    const testChartData = {
        labels: props.tenDaysWeather.map(day => day.date + " " + day.week),
        datasets: [
            {
                label: "Day temperature",
                data: props.tenDaysWeather.map(day => Number(day.day.temperature.slice(0, -1))),
                borderColor: "orange",
                backgroundColor: (context) => setGradient(context, "#ffcc0055"),
                fill: true,
                borderWidth: 1,
            },
            {
                label: "Night temperature",
                data: props.tenDaysWeather.map(day => Number(day.night.temperature.slice(0, -1))),
                borderColor: "blue",
                backgroundColor: (context) => setGradient(context, "#0000ff55"),
                fill: true,
                borderWidth: 1,
            }
        ],
    };

    return (
        <div className={s.weatherChart}>
            <Line data={testChartData}/>
        </div>
    )
}

export default TenDaysWeatherChart;