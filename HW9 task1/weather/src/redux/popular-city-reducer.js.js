let initialState = {
    popularCityList: [
        {
            "id": 524894,
            "name": "Moscow",
            "country": "RU",
            "coord": {
                "lon": 37.606667,
                "lat": 55.761665
            }
        },
        {
            "id": 536203,
            "name": "Saint Petersburg",
            "country": "RU",
            "coord": {
                "lon": 30.25,
                "lat": 59.916668
            }
        },
        {
            "id": 542420,
            "name": "Krasnodar",
            "country": "RU",
            "coord": {
                "lon": 38.976944,
                "lat": 45.03278
            }
        },
        {
            "id": 582182,
            "name": "Anapa",
            "country": "RU",
            "coord": {
                "lon": 37.323898,
                "lat": 44.890839
            }
        },
        {
            "id": 551487,
            "name": "Kazan",
            "country": "RU",
            "coord": {
                "lon": 49.122139,
                "lat": 55.788738
            }
        },
        {
            "id": 625144,
            "name": "Minsk",
            "country": "BY",
            "coord": {
                "lon": 27.566668,
                "lat": 53.900002
            }
        },
        {
            "id": 629634,
            "name": "Brest",
            "country": "BY",
            "coord": {
                "lon": 23.700001,
                "lat": 52.099998
            }
        },
        {
            "id": 3173435,
            "name": "Milan",
            "country": "IT",
            "coord": {
                "lon": 9.18951,
                "lat": 45.464272
            }
        },
        {
            "id": 4348460,
            "name": "Berlin",
            "country": "US",
            "coord": {
                "lon": -75.21769,
                "lat": 38.32262
            }
        },
        {
            "id": 1645528,
            "name": "Denpasar",
            "country": "ID",
            "coord": {
                "lon": 115.216667,
                "lat": -8.65
            }
        },
        {
            "id": 2333064,
            "name": "Kuta",
            "country": "NG",
            "coord": {
                "lon": 6.71667,
                "lat": 9.86667
            }
        },
        {
            "id": 1880252,
            "name": "Singapore",
            "country": "SG",
            "coord": {
                "lon": 103.850067,
                "lat": 1.28967
            }
        },
        {
            "id": 292224,
            "name": "Dubai",
            "country": "AE",
            "coord": {
                "lon": 55.333328,
                "lat": 25.0
            }
        },
        {
            "id": 146384,
            "name": "Limassol",
            "country": "CY",
            "coord": {
                "lon": 33.033329,
                "lat": 34.674999
            }
        },
        {
            "id": 1151254,
            "name": "Phuket",
            "country": "TH",
            "coord": {
                "lon": 98.398102,
                "lat": 7.89059
            }
        }
    ]
}

const getPopularCityReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default getPopularCityReducer;