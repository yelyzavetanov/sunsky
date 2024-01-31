import React from "react";
import s from "./HourlyWeatherChart.module.css";
// import {Chart as ChartJS} from "chart.js/auto";
import {Line} from "react-chartjs-2";

function HourlyWeatherChart (props) {

    const setGradient = (context, color) => {
        const bgColor = color;

        if (!context.chart.chartArea) {
            return 0;
        }

        const {ctx, chartArea: {left, right}} = context.chart;
        const gradientBg = ctx.createLinearGradient(left, 0, right, 0);
        gradientBg.addColorStop(0, bgColor[1]);
        gradientBg.addColorStop(0.25, bgColor[0]);
        gradientBg.addColorStop(0.75, bgColor[0]);
        gradientBg.addColorStop(1, bgColor[1]);

        return gradientBg;
    }

    console.log(props.hourlyWeather);

    const chartData = {
        labels: props.hourlyWeather.map(h => h.hour),
        datasets: [
            {
                label: "Temperature",
                data: props.hourlyWeather.map(h => Number(h.temperature.slice(0, -1))),
                borderColor: "orange",
                // borderColor: (context) => setGradient(context, ["orange", "#0000ff55"]),
                backgroundColor: (context) => setGradient(context, ["#ffcc0055", "#0000ff22"]),
                fill: true,
                borderWidth: 1,
                pointHoverRadius: 10,
            },
        ],
    };

    return (
        <div className={s.weatherChart}>
            <Line data={chartData} type={"line"}/>
        </div>
    )
}

export default HourlyWeatherChart;