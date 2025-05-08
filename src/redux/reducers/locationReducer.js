import { createAction, createReducer } from '@reduxjs/toolkit';

export const changeLocation = createAction("weather/changeCalendarMonth", (location) => {
    return {
        payload: {
            location: location,
        }
    }
})

const initialState = {
    location: {
        city: "Nowhere",
        country: "Nowhere",
    },
}

const locationReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(changeLocation, (state, action) => {
            state.location = action.payload.location;
        })
        .addDefaultCase(() => {});
})


export default locationReducer;