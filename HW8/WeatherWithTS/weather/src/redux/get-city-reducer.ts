import { AppStateType } from './redux-store';
import { searchAPI } from "../api/api";
import { CityItemType } from '../type/type';
import { ThunkAction } from "redux-thunk";

const SET_DATA_CURRENT_CITY = 'SET_DATA_CURRENT_CITY';
const CHANGE_FETCHING = 'CHANGE_FETCHING';

type InitialStateType = {
    isFetching: boolean,
    dataCurrentCity: CityItemType,
}

let initialState: InitialStateType = {
    isFetching: false,
    dataCurrentCity: {
        id: 0,
        name: '',
        country: '',
        coord: {
            lon: 0,
            lat: 0
        }
    },
}

const getCityReducer = (state = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case SET_DATA_CURRENT_CITY:
            return {
                ...state,
                dataCurrentCity: {
                    ...state.dataCurrentCity,
                    ...action.objDataCity
                }
            }
        case CHANGE_FETCHING:
            return {
                ...state,
                isFetching: action.boolFetching
            }
        default:
            return state
    }
}

type SetDataCurrentCityActionType = {
    type: typeof SET_DATA_CURRENT_CITY,
    objDataCity: CityItemType
}

export type ChangeFetchingActionType = {
    type: typeof CHANGE_FETCHING,
    boolFetching: boolean
}

type ActionsType = SetDataCurrentCityActionType | ChangeFetchingActionType;

export const setDataCurrentCity = (objDataCity: CityItemType): SetDataCurrentCityActionType => ({ type: SET_DATA_CURRENT_CITY, objDataCity });

export const changeFetching = (boolFetching: boolean): ChangeFetchingActionType => ({ type: CHANGE_FETCHING, boolFetching });

export const getDataCurrentCity = (id: number): ThunkAction<Promise<void>, AppStateType, unknown, ActionsType> => async (dispatch, getState) => {
    let promise = await searchAPI.getDataCityById(id);
    dispatch(setDataCurrentCity({ ...promise[0] }));
}

export default getCityReducer;