import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import getCityReducer from './get-city-reducer';
import searchReducer from './search-reducer';
import weatherReducer from './weather-reducer';
import thunk from 'redux-thunk';
import getPopularCityReducer from './popular-city-reducer';
// import { type } from 'express/lib/response';

let reducers = combineReducers ({
    search: searchReducer,
    getCity: getCityReducer,
    weather: weatherReducer,
    popularCity: getPopularCityReducer,
})

type ReducersType = typeof reducers;
export type AppStateType = ReturnType<ReducersType>

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

// @ts-ignore
window.store = store