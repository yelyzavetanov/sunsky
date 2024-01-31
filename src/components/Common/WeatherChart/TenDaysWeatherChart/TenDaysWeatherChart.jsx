import React from "react";
import s from "./TenDaysWeatherChart.module.css";
import {Chart as ChartJS} from "chart.js/auto";
import {Line} from "react-chartjs-2";

function TenDaysWeatherChart (props) {

    const setGradient = (context, color) => {
            const bgColor = color;

            if (!context.chart.chartArea) {
                return 0;
            }

            const {ctx, chartArea: {top, bottom}} = context.chart;
            const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
            gradientBg.addColorStop(0, bgColor[0]);
            gradientBg.addColorStop(1, bgColor[1]);

            return gradientBg;
        }

    const chartData = {
        labels: props.tenDaysWeather.map(day => day.date + " " + day.week),
        datasets: [
            {
                label: "Day temperature",
                data: props.tenDaysWeather.map(day => Number(day.day.temperature.slice(0, -1))),
                borderColor: "orange",
                backgroundColor: (context) => setGradient(context, ["#ffcc0055", "#ffffff00"]),
                fill: true,
                borderWidth: 1,
                pointHoverRadius: 10,
            },
            {
                label: "Night temperature",
                data: props.tenDaysWeather.map(day => Number(day.night.temperature.slice(0, -1))),
                borderColor: "blue",
                backgroundColor: (context) => setGradient(context, ["#ffffff00", "#0000ff22"]),
                fill: true,
                borderWidth: 1,
                pointHoverRadius: 10,
            }
        ],
    };

    return (
        <div className={s.weatherChart}>
            <Line data={chartData} type={"line"}/>
        </div>
    )
}

export default TenDaysWeatherChart;