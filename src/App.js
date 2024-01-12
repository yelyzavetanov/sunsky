import React, {useEffect} from "react";
import s from './App.module.css';
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Main from "./components/Main/Main";
import Sidebar from "./components/Sidebar/Sidebar";
import {BrowserRouter} from "react-router-dom";
import {connect} from "react-redux";
import {changeCalendarMonth} from "./redux/reducers/weatherReducer";

function App(props) {
    const weather = props.weather;

    const weatherBackgrounds = weather.weatherBackgrounds;
    const todayWeatherDescription = weather.todayWeather.day.description;

    console.log("store: ", props.store.getState());

    return (
        <BrowserRouter>
            <div className={s.background} style={weatherBackgrounds[todayWeatherDescription]}>
                <div className={s.App}>
                    <Header/>
                    <Main>
                        <Home
                            changeCalendarMonth={props.changeCalendarMonth}
                            calendar={weather.calendarDays}
                            tenDaysWeather={weather.tenDaysWeather}
                            hourlyWeather={weather.hourlyWeather}
                            todayWeather={weather.todayWeather}
                        />
                        <Sidebar/>
                    </Main>
                    <Footer/>
                </div>
            </div>
        </BrowserRouter>
    );
}

const mapStateToProps = (state) => ({
    weather: state.weather,
    state,
})

const mapDispatchToProps = (dispatch) => ({
    changeCalendarMonth: (month) => dispatch(changeCalendarMonth(month)),
})

const WeatherApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default WeatherApp;