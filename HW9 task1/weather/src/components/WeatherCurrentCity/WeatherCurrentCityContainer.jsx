import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeFetching } from "../../redux/get-city-reducer";
import { changeValueDeg, getDataWeather } from "../../redux/weather-reducer";
import Loading from "../Loading/Loading";
import WeatherCurrentCity from "./WeatherCurrentCity";

const WeatherCurrentCityContainer = ({getCity, getDataWeather, changeFetching, weather, changeValueDeg}) => {
    useEffect(() => {
        getDataWeather(getCity.dataCurrentCity.coord.lat, getCity.dataCurrentCity.coord.lon);
        // changeFetching(false);
    }, [getCity.dataCurrentCity.coord.lat, getCity.dataCurrentCity.coord.lon]);

    return (
        <>
            {getCity.isFetching ? < Loading /> :
                <WeatherCurrentCity changeValueDeg={changeValueDeg} degCelsius={weather.degCelsius} dataWeather={weather.dataWeather} />
            }
        </>
    )
}

const mapStateToProps = (state) => ({
    getCity: state.getCity,
    weather: state.weather,
});

export default connect(mapStateToProps, { getDataWeather, changeFetching, changeValueDeg })(WeatherCurrentCityContainer)