import { weatherAPI } from "../api/api";
import { changeFetching } from "./get-city-reducer";

const SET_DATA_WEATHER = 'SET_DATA_WEATHER';
const CHANGE_VALUE_DEG = 'CHANGE_VALUE_DEG';

let initialState = {
    dataWeather: null,
    degCelsius: false,

}

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_WEATHER: 
            return {
                ...state,
                dataWeather: action.weatherData
            } 
        case CHANGE_VALUE_DEG:
            return {
                ...state,
                degCelsius: action.degCels
            }
        default: 
            return state
    }
}

export const setDataWeather = (weatherData) => ({type: SET_DATA_WEATHER, weatherData});

export const changeValueDeg = (degCels) => ({type: CHANGE_VALUE_DEG, degCels});

export const getDataWeather = (lat, lon) => async (dispatch) => {
    let promise = await weatherAPI.getDataWeather(lat, lon);
    dispatch(setDataWeather(promise));
    dispatch(changeFetching(false));
    console.log(promise)
}

export default weatherReducer;