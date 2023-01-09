import React, { useEffect } from "react";
import { connect } from "react-redux";
import SelectionCityList from "./SelectionCityList";
import { changeFetching, getDataCurrentCity } from "../../../../../redux/get-city-reducer";
import { getCityList, setSelectionCity, showChoiceCity, showInput } from "../../../../../redux/search-reducer";
import { AppStateType } from "../../../../../redux/redux-store";
import { CityItemType } from "../../../../../type/type";

type MapStateToPropsType = {
    cityList: Array<CityItemType>,
    cityName: string
}

type MapDispatchToPropsType = {
    setSelectionCity: (cityName: string) => void,
    showInput: () => void,
    getCityList: (cityName: string) => void,
    getDataCurrentCity: (id: number) => void,
    changeFetching: (boolFetching: boolean) => void,
    showChoiceCity: (bol: boolean) => void
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType;

const SelectionCityListContainer: React.FC<PropsType> = ({cityList, cityName, getDataCurrentCity, changeFetching, getCityList, showChoiceCity, showInput, setSelectionCity}) => {

    useEffect(() => {
        getCityList(cityName);
    }, [cityName]);

    return (
        <SelectionCityList setSelectionCity={setSelectionCity} showInput={showInput} cityList={cityList} getDataCurrentCity={getDataCurrentCity} changeFetching={changeFetching} showChoiceCity={showChoiceCity}/>
    )
}

const mapStateToProps = (state: AppStateType):MapStateToPropsType  => ({
    cityList: state.search.cityList,
    cityName: state.search.cityName
});

export default connect(mapStateToProps, { getDataCurrentCity, changeFetching, getCityList, showChoiceCity, showInput, setSelectionCity})(SelectionCityListContainer);
