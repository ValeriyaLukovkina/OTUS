import { CityItemType } from './../type/type';
import { ThunkAction } from "redux-thunk";
import { searchAPI } from "../api/api";
import { AppStateType } from "./redux-store";

const SHOW_INPUT = 'SHOW_INPUT';
const SELECT_CITY_NAME = 'SELECT_CITY_NAME';
const SET_CITY_LIST = 'SET_CITY_LIST';
const SHOW_CHOICE_CITY = 'SHOW_CHOICE_CITY';
const SET_SELECTION_CITY = 'SET_SELECTION_CITY';

type InitialStateType = {
    startedSeach: boolean,
    selectionCity: string,
    cityName: string,
    cityList: Array<CityItemType>,
    choiceCity: boolean,
}

let initialState: InitialStateType = {
    startedSeach: false,
    selectionCity: 'Выберите город (на английском)',
    cityName: '',
    cityList: [],
    choiceCity: false,
}

const searchReducer = (state = initialState, action: ActionsType): InitialStateType => {
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

type ShowInputActionType = {
    type: typeof SHOW_INPUT,
}
type SelectCityNameActionType = {
    type: typeof SELECT_CITY_NAME,
    newCityName: string
}
type SetCityListActionType = {
    type: typeof SET_CITY_LIST,
    cityList: Array<CityItemType>
}
type ShowChoiceCityActionType = {
    type: typeof SHOW_CHOICE_CITY,
    bol: boolean
}
type SetSelectionCityActionType = {
    type: typeof SET_SELECTION_CITY,
    cityName: string
}

type ActionsType = ShowInputActionType | SelectCityNameActionType | SetCityListActionType | ShowChoiceCityActionType | SetSelectionCityActionType;

export const showInput = (): ShowInputActionType => ({ type: SHOW_INPUT });

export const selectCityName = (newCityName: string): SelectCityNameActionType => ({ type: SELECT_CITY_NAME, newCityName });

export const setCityList = (cityList: Array<CityItemType>): SetCityListActionType => ({ type: SET_CITY_LIST, cityList });

export const showChoiceCity = (bol: boolean): ShowChoiceCityActionType => ({ type: SHOW_CHOICE_CITY, bol });

export const setSelectionCity = (cityName: string): SetSelectionCityActionType => ({ type: SET_SELECTION_CITY, cityName });

export const getCityList = (cityName: string): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch) => {
    let promise = await searchAPI.getCityList(cityName)
    dispatch(setCityList(promise))
    if (promise && promise.length > 0) {
        dispatch(showChoiceCity(true))
    }
}

export default searchReducer;