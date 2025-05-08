import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from "./reducers/weatherReducer";
import locationReducer from "./reducers/locationReducer";

const reducer = {
    weather: weatherReducer,
    location: locationReducer,
}

const store = configureStore(
    {reducer}
    );

window.store = store;

export default store;