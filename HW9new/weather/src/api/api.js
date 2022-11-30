import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})


export const searchAPI = {
    getCityList(cityName) {
        return instance.get(`citylist/${cityName}`)
            .then(response => response.data)
    },
    getDataCityById(id) {
        return instance.get(`citylist/getId/${id}`)
            .then(response => response.data)
    }
}

export const weatherAPI = {
    getDataWeather (lat, lon ) {
        return axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b66d03559856ea5e789198fdd1f948b0`)
        .then(response => response.data)
    }
}