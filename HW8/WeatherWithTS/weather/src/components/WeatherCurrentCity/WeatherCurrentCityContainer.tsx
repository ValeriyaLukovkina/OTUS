import React, { useEffect } from "react";
import { connect } from "react-redux";
import { changeFetching } from "../../redux/get-city-reducer";
import { AppStateType } from "../../redux/redux-store";
import { changeValueDeg, getDataWeather } from "../../redux/weather-reducer";
import { CityItemType } from "../../type/type";
import Loading from "../Loading/Loading";
import WeatherCurrentCity from "./WeatherCurrentCity";

type MapStateToPropsType = {
    dataCurrentCity: CityItemType,
    isFetching: boolean
    dataWeather: any,
    degCelsius: boolean
}

type MapDispatchToPropsType = {
    getDataWeather: (lat: number, lon: number) => void, 
    changeFetching: (boolFetching: boolean) => void,
    changeValueDeg: (bol: boolean) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const WeatherCurrentCityContainer: React.FC<PropsType> = ({dataCurrentCity, isFetching,degCelsius, dataWeather, getDataWeather, changeFetching, changeValueDeg}) => {
    useEffect(() => {
        getDataWeather(dataCurrentCity.coord.lat, dataCurrentCity.coord.lon);
        // changeFetching(false);
    }, [dataCurrentCity.coord.lat, dataCurrentCity.coord.lon]);

    return (
        <>
            {isFetching ? < Loading /> :
                <WeatherCurrentCity changeValueDeg={changeValueDeg} degCelsius={degCelsius} dataWeather={dataWeather} />
            }
        </>
    )
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    dataCurrentCity: state.getCity.dataCurrentCity,
    isFetching: state.getCity.isFetching,
    dataWeather: state.weather.dataWeather,
    degCelsius: state.weather.degCelsius,
});

export default connect(mapStateToProps, { getDataWeather, changeFetching, changeValueDeg })(WeatherCurrentCityContainer)