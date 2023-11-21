class DayOfMonth {
    constructor(month, week, currentDate, day, night) {
        this.month = month;
        this.week = week;
        this.date = currentDate;
        this.day = day;
        this.night = night;
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

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export function randomizeCalendar(month) {
    const monthDays = [
        {month: "January", days: 31},
        {month: "February", days: 28},
        {month: "March", days: 31},
        {month: "April", days: 30},
        {month: "May", days: 31},
        {month: "June", days: 30},
        {month: "July", days: 31},
        {month: "August", days: 31},
        {month: "September", days: 30},
        {month: "October", days: 31},
        {month: "November", days: 30},
        {month: "December", days: 31},
    ];

    const monthWeatherArray = [];

    const arrayMonth = monthDays.filter(e => e.month === month)[0];

    randomizeDaysWeather(arrayMonth, monthWeatherArray);

    editCalendar(monthWeatherArray, weekDays);

    return monthWeatherArray;
}

function randomizeDaysWeather (arrayMonth, weatherArray) {
    const descriptions = ["clear", "cloudy", "rain", "snow"];
    let randomWeekDayIndex = weekDays.indexOf(weekDays[Math.floor(Math.random()*weekDays.length)]);

    for (let i = 1; i <= arrayMonth.days; i++) {

        const dayTemperature = Math.floor(Math.random() * 30);

        const day = new HalfOfDay(
            dayTemperature + "°",
            descriptions[Math.floor(Math.random()*descriptions.length)],
            Math.floor(Math.random() * 95) + "%",
            Math.floor(Math.random() * 30) + "km/h",
        );
        const night = new HalfOfDay(
            dayTemperature - 10 + "°",
            descriptions[Math.floor(Math.random()*descriptions.length)],
            Math.floor(Math.random() * 95) + "%",
            Math.floor(Math.random() * 30) + "km/h",
        );

        const dayOfMonth = new DayOfMonth(
            arrayMonth.month,
            weekDays[randomWeekDayIndex],
            i.toString(),
            day,
            night
        );

        weatherArray.push(dayOfMonth);

        if (randomWeekDayIndex === weekDays.length -1) {
            randomWeekDayIndex = 0;
        } else {
            randomWeekDayIndex++;
        }
    }
}

function editCalendar (monthWeatherArray, weekDays) {
    if(monthWeatherArray[0].week !== "Mon" && monthWeatherArray.length % 7 !== 0) {
        const weekDayIndex = weekDays.indexOf(monthWeatherArray[0].week);
        for (let i = 0; i < weekDayIndex; i++) {
            monthWeatherArray.unshift(null);
        }
    }

    while(!(monthWeatherArray.length % 7 === 0)) {
        monthWeatherArray.push(null);
    }
}

export function randomizeTenDaysWeather() {
    const tenDaysWeatherArray = [];
    randomizeDaysWeather({month: "July", days: 10}, tenDaysWeatherArray);
    return tenDaysWeatherArray;
}