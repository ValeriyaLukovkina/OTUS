import { CityItemType } from './../type/type';
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
})

export const searchAPI = {
    getCityList(cityName: string) {
        return instance.get<Array<CityItemType>>(`citylist/${cityName}`)
            .then(response => response.data)
    },
    getDataCityById(id: number) {
        return instance.get<Array<any>>(`citylist/getId/${id}`)
            .then(response => response.data)
    }
}

export const weatherAPI = {
    getDataWeather (lat: number, lon: number ) {
        return axios.get<Array<any>>(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=b66d03559856ea5e789198fdd1f948b0`)
        .then(response => response.data)
    }
}