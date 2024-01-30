import {monthDays} from "./monthsArray";

class DayOfMonth {
    constructor(month, week, currentDate, day, night, morning, evening) {
        this.month = month;
        this.week = week;
        this.date = currentDate;
        this.day = day;
        this.night = night;
        this.morning = morning;
        this.evening = evening;
    }
}

class HalfOfDay {
    constructor(temperature, description, humidity, wind) {
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.wind = wind;
    }
}

class WeatherForHour {
    constructor(hour, temperature, description, humidity, wind) {
        this.hour = hour;
        this.temperature = temperature;
        this.description = description;
        this.humidity = humidity;
        this.wind = wind;
    }
}

const weatherDescriptions = ["clear", "cloudy", "rain", "snow", "thunderstorm", "fog"];
const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let randomWeekDayIndex = weekDays.indexOf(weekDays[Math.floor(Math.random()*weekDays.length)]);

function randomizeTemperature() {
    return Math.floor(Math.random() * 30);
}

function randomizeDescription() {
    return weatherDescriptions[Math.floor(Math.random()*weatherDescriptions.length)];
}

function randomizeHumidity() {
    return Math.floor(Math.random() * 95) + "%";
}

function randomizeWind() {
    return Math.floor(Math.random() * 30) + "km/h";
}

export function randomizeCalendar(month) {
    const monthWeatherArray = [];
    const arrayMonth = monthDays.filter(e => e.month === month)[0];

    randomizeDaysWeather(arrayMonth, monthWeatherArray, 1);

    if (monthWeatherArray.length % 7 !== 0) {
        editCalendar(monthWeatherArray, weekDays);
    }

    return monthWeatherArray;
}

function randomizeDaysWeather (arrayMonth, weatherArray, daysNumber) {
    for (let i = daysNumber; i <= daysNumber + arrayMonth.days - 1; i++) {
        // console.log(weatherArray);
        weatherArray.push(randomizeOneDayWeather(weatherDescriptions, arrayMonth, randomWeekDayIndex, i));

        if (randomWeekDayIndex === weekDays.length -1) {
            randomWeekDayIndex = 0;
        } else {
            randomWeekDayIndex++;
        }
    }
}

function randomizeOneDayWeather(weatherDescriptions, arrayMonth, randomWeekDayIndex, dayNumber) {
    const dayTemperature = randomizeTemperature();

    const day = new HalfOfDay(
        dayTemperature + "°",
        randomizeDescription(),
        randomizeHumidity(),
        randomizeWind(),
    );
    const night = new HalfOfDay(
        dayTemperature - 10 + "°",
        randomizeDescription(),
        randomizeHumidity(),
        randomizeWind(),
    );

    const dayOfMonth = new DayOfMonth(
        arrayMonth.month,
        weekDays[randomWeekDayIndex],
        dayNumber.toString(),
        day,
        night,
        randomizeDescription(),
        randomizeDescription(),
    );

    return dayOfMonth;
}

function editCalendar (monthWeatherArray, weekDays) {
    if (monthWeatherArray[0] === null) {
        console.log("NULL");
    }

    if(monthWeatherArray[0].week !== "Sun" && /*monthWeatherArray.length % 7 !== 0 &&*/ monthWeatherArray[0] !== null) {
        const weekDayIndex = weekDays.indexOf(monthWeatherArray[0].week);
        for (let i = 0; i < weekDayIndex; i++) {
            monthWeatherArray.unshift(null);
        }
    }

    while(!(monthWeatherArray.length % 7 === 0)) {
        monthWeatherArray.push(null);
    }
}

function randomizeHourWeather(hour) {
    const temperature = randomizeTemperature() + "°";
    const description = randomizeDescription();
    const humidity = randomizeHumidity();
    const wind = randomizeWind();

    return new WeatherForHour(hour, temperature, description, humidity, wind);
}

export function randomizeHourlyWeather() {
    const hourlyWeather = [];
    let hour = 0;

    for (let i = 0; i < 24; i++) {
        if (i <= 12) {
            hour = i + " AM";
        } else {
            hour = i - 12 + " PM";
        }
        hourlyWeather.push(randomizeHourWeather(hour));
    }

    return hourlyWeather;
}

export function randomizeTenDaysWeather(month, dayNumber) {
    const tenDaysWeatherArray = [];
    randomizeDaysWeather({month: month, days: 10}, tenDaysWeatherArray, dayNumber);
    return tenDaysWeatherArray;
}

export function randomizeTodayWeather(month, dayNumber) {
    const arrayMonth = monthDays.filter(e => e.month === month)[0];

    return randomizeOneDayWeather(weatherDescriptions, arrayMonth, randomWeekDayIndex, dayNumber);
}