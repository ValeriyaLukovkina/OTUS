import { ThunkAction } from "redux-thunk";
import { weatherAPI } from "../api/api";
import { changeFetching, ChangeFetchingActionType } from "./get-city-reducer";
import { AppStateType } from "./redux-store";
//@
const SET_DATA_WEATHER = 'SET_DATA_WEATHER';
const CHANGE_VALUE_DEG = 'CHANGE_VALUE_DEG';

type InitialStateType = {
    dataWeather: any,
    degCelsius: boolean,
}

let initialState: InitialStateType = {
    dataWeather: null,
    degCelsius: false,

}

const weatherReducer = (state = initialState, action: any): InitialStateType => {
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

type SetDataWeatherActionType = {
    type: typeof SET_DATA_WEATHER, 
    weatherData: any
}

type ChangeValueDegActionType = {
    type: typeof CHANGE_VALUE_DEG, 
    degCels: boolean
}

type ActionsType = SetDataWeatherActionType | ChangeValueDegActionType | ChangeFetchingActionType;

export const setDataWeather = (weatherData: any): SetDataWeatherActionType => ({type: SET_DATA_WEATHER, weatherData});

export const changeValueDeg = (degCels: boolean): ChangeValueDegActionType => ({type: CHANGE_VALUE_DEG, degCels});

export const getDataWeather = (lat: number, lon: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let promise = await weatherAPI.getDataWeather(lat, lon);
    dispatch(setDataWeather(promise));
    dispatch(changeFetching(false));
}

export default weatherReducer;