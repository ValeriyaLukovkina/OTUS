import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import getCityReducer from './get-city-reducer';
import searchReducer from './search-reducer';
import weatherReducer from './weather-reducer';
import thunk from 'redux-thunk';
import getPopularCityReducer from './popular-city-reducer.js';

let reducers = combineReducers ({
    search: searchReducer,
    getCity: getCityReducer,
    weather: weatherReducer,
    popularCity: getPopularCityReducer,
})

let store = createStore(reducers, applyMiddleware(thunk));

export default store;

window.store = store