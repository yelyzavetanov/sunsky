import { createAction, createReducer } from '@reduxjs/toolkit';
import {
    randomizeCalendar, randomizeHourlyWeather,
    randomizeTenDaysWeather,
    randomizeTodayWeather
} from "../../components/WeatherRandomizer/weatherRandomizer";

export const increment = createAction('counter/increment');
const decrement = createAction('counter/decrement');
const incrementByAmount = createAction('counter/incrementByAmount');

export const changeCalendarMonth = createAction("weather/changeCalendarMonth", (month) => {
    return {
        payload: {
            month: month,
        }
    }
})

// console.log(changeCalendarMonth("December"));

const month = "April";

let action = incrementByAmount();
action = incrementByAmount(3);
// console.log(incrementByAmount.type);

const initialState = {
    value: 0,

    calendarDays: randomizeCalendar(month),
    tenDaysWeather: randomizeTenDaysWeather(),
    hourlyWeather: randomizeHourlyWeather(),
    todayWeather: randomizeTodayWeather(),

    weatherBackgrounds: {
        clear: {
            // backgroundImage: "url(\"https://free4kwallpapers.com/uploads/originals/2015/10/07/clear-sky-hd-wallpaper.jpg\")",
            backgroundImage: "url(\"https://images.unsplash.com/photo-1601345459799-245d61f56121?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")",
        },
        cloudy: {
            backgroundImage: "url(\"https://images.unsplash.com/photo-1419833173245-f59e1b93f9ee?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")",
        },
        rain: {
            backgroundImage: "url(\"https://images.wallpaperscraft.ru/image/single/zont_dozhd_kapli_119206_6000x4000.jpg\")",
        },
        snow: {
            backgroundImage: "url(\"https://images.unsplash.com/photo-1547754980-3df97fed72a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")",
        },
        thunderstorm: {
            // backgroundImage: "url(\"https://images.unsplash.com/photo-1561485132-59468cd0b553?q=80&w=1952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")",
            backgroundImage: "url(\"https://images.unsplash.com/photo-1465799522714-8eb0e6fccf73?q=80&w=1913&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")",
        },
        fog: {
            backgroundImage: "url(\"https://images.unsplash.com/photo-1604045012226-d6634668dfb4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\")",
        },
    },
}

// console.log(randomizeCalendar("March"));
// console.log(initialState.calendarDays);

const weatherReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state, action) => {
            state.value++;
        })
        .addCase(decrement, (state, action) => {
            state.value--;
        })
        .addCase(incrementByAmount, (state, action) => {
            state.value += action.payload;
        })
        .addCase(changeCalendarMonth, (state, action) => {
            // console.log(randomizeCalendar(action.payload.month));
            state.calendarDays = randomizeCalendar(action.payload.month);
            // console.log("dispatch", action.payload.month, state.calendarDays);
        })
        .addDefaultCase((state, action) => {});
})

// export function changeCalendarMonth(month) {
//
// }

export default weatherReducer;