import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from "./reducers/weatherReducer";

const reducer = {
    weather: weatherReducer,
}

const store = configureStore(
    {reducer}
    );

window.store = store;

export default store;