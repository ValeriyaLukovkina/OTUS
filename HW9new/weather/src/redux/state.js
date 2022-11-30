import getCityReducer from "./get-city-reducer";
import searchReducer from "./search-reducer";

const SHOW_INPUT = 'SHOW_INPUT';
const SELECT_CITY_NAME = 'SELECT_CITY_NAME';
const GET_DATA_CURRENT_CITY = 'GET_DATA_CURRENT_CITY';


let store = {
    rerenderEntireTree() { },
    _state: {
        search: {
            cityList: [
                {
                    "id": 524894,
                    "name": "Moscow",
                    "state": "",
                    "country": "RU",
                    "coord": {
                        "lon": 37.606667,
                        "lat": 55.761665
                    }
                },
                {
                    "id": 536203,
                    "name": "Saint Petersburg",
                    "state": "",
                    "country": "RU",
                    "coord": {
                        "lon": 30.25,
                        "lat": 59.916668
                    }
                },
                {
                    "id": 542420,
                    "name": "Krasnodar",
                    "state": "",
                    "country": "RU",
                    "coord": {
                        "lon": 38.976944,
                        "lat": 45.03278
                    }
                },
                {
                    "id": 582182,
                    "name": "Anapa",
                    "state": "",
                    "country": "RU",
                    "coord": {
                        "lon": 37.323898,
                        "lat": 44.890839
                    }
                },
                {
                    "id": 551487,
                    "name": "Kazan",
                    "state": "",
                    "country": "RU",
                    "coord": {
                        "lon": 49.122139,
                        "lat": 55.788738
                    }
                },
                {
                    "id": 625144,
                    "name": "Minsk",
                    "state": "",
                    "country": "BY",
                    "coord": {
                        "lon": 27.566668,
                        "lat": 53.900002
                    }
                },
                {
                    "id": 629634,
                    "name": "Brest",
                    "state": "",
                    "country": "BY",
                    "coord": {
                        "lon": 23.700001,
                        "lat": 52.099998
                    }
                },
                {
                    "id": 3173435,
                    "name": "Milan",
                    "state": "",
                    "country": "IT",
                    "coord": {
                        "lon": 9.18951,
                        "lat": 45.464272
                    }
                },
                {
                    "id": 4348460,
                    "name": "Berlin",
                    "state": "MD",
                    "country": "US",
                    "coord": {
                        "lon": -75.21769,
                        "lat": 38.32262
                    }
                },
                {
                    "id": 1645528,
                    "name": "Denpasar",
                    "state": "",
                    "country": "ID",
                    "coord": {
                        "lon": 115.216667,
                        "lat": -8.65
                    }
                },
                {
                    "id": 2333064,
                    "name": "Kuta",
                    "state": "",
                    "country": "NG",
                    "coord": {
                        "lon": 6.71667,
                        "lat": 9.86667
                    }
                },
                {
                    "id": 1880252,
                    "name": "Singapore",
                    "state": "",
                    "country": "SG",
                    "coord": {
                        "lon": 103.850067,
                        "lat": 1.28967
                    }
                },
                {
                    "id": 292224,
                    "name": "Dubai",
                    "state": "",
                    "country": "AE",
                    "coord": {
                        "lon": 55.333328,
                        "lat": 25.0
                    }
                },
                {
                    "id": 146384,
                    "name": "Limassol",
                    "state": "",
                    "country": "CY",
                    "coord": {
                        "lon": 33.033329,
                        "lat": 34.674999
                    }
                },
                {
                    "id": 1151254,
                    "name": "Phuket",
                    "state": "",
                    "country": "TH",
                    "coord": {
                        "lon": 98.398102,
                        "lat": 7.89059
                    }
                }
            ],
            startedSeach: false,
            // selectionCity: 'Выберите город (на английском)',
            cityName: 'Выберите город (на английском)'
        },
        dataCurrentCity: {
            id: '',
            name: '',
            country: '',
            coord: {
                lon: '',
                lat: ''
            }
        }
    },
    dispatch (action) {

        searchReducer(this._state.search, action);
        getCityReducer(this._state, action);
        this.rerenderEntireTree();
    },
    getState () {
        return this._state;
    },

    subscribe (observer){
        this.rerenderEntireTree = observer;
    }
    
}


export default store;

// window.state = store;