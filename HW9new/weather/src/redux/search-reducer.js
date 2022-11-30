import { searchAPI } from "../api/api";

const SHOW_INPUT = 'SHOW_INPUT';
const SELECT_CITY_NAME = 'SELECT_CITY_NAME';
const SET_CITY_LIST = 'SET_CITY_LIST';
const SHOW_CHOICE_CITY = 'SHOW_CHOICE_CITY';
const SET_SELECTION_CITY = 'SET_SELECTION_CITY';

let initialState = {
    startedSeach: false,
    selectionCity: 'Выберите город (на английском)',
    cityName: '',
    cityList: [],
    choiceCity: false,
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_INPUT:
            return {
                ...state,
                cityName: 'Выберите город (на английском)',
                startedSeach: !state.startedSeach,
                choiceCity: false
            }
        case SELECT_CITY_NAME:
            return {
                ...state,
                cityName: action.newCityName
            }
        case SET_CITY_LIST:
            return {
                ...state,
                cityList: [...action.cityList]
            }
        case SHOW_CHOICE_CITY:
            return {
                ...state,
                choiceCity: action.bol
            }
        case SET_SELECTION_CITY:
            return {
                ...state,
                selectionCity: action.cityName
            }
        default:
            return state
    }
}

export const showInput = () => ({ type: SHOW_INPUT });

export const selectCityName = (newCityName) => ({ type: SELECT_CITY_NAME, newCityName });

export const setCityList = (cityList) => ({ type: SET_CITY_LIST, cityList });

export const showChoiceCity = (bol) => ({ type: SHOW_CHOICE_CITY, bol });

export const setSelectionCity = (cityName) => ({ type: SET_SELECTION_CITY, cityName });

export const getCityList = (cityName) => async (dispatch) => {

    let promise = await searchAPI.getCityList(cityName)
    dispatch(setCityList(promise))
    if (promise && promise.length > 0) {
        dispatch(showChoiceCity(true))
    }
}

export default searchReducer;