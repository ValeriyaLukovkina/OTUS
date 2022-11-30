import { searchAPI } from "../api/api";

const SET_DATA_CURRENT_CITY = 'SET_DATA_CURRENT_CITY';
const CHANGE_FETCHING = 'CHANGE_FETCHING'

let initialState = {
    isFetching: false,
    dataCurrentCity: {
        id: '',
        name: '',
        country: '',
        coord: {
            lon: '',
            lat: ''
        }
    },

}

const getCityReducer = (state = initialState, action) => {
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

export const setDataCurrentCity = (objDataCity) => ({ type: SET_DATA_CURRENT_CITY, objDataCity });

export const changeFetching = (boolFetching) => ({ type: CHANGE_FETCHING, boolFetching });


export const getDataCurrentCity = (id) => async (dispatch) => {
    let promise = await searchAPI.getDataCityById(id);
    dispatch(setDataCurrentCity({ ...promise[0] }));
}

export default getCityReducer;