import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SelectionCityList from "./SelectionCityList";
import { changeFetching, getDataCurrentCity } from "../../../../../redux/get-city-reducer";
import { getCityList, setSelectionCity, showChoiceCity, showInput } from "../../../../../redux/search-reducer";

const SelectionCityListContainer = (props) => {

    useEffect(() => {
        props.getCityList(props.search.cityName);
    }, [props.search.cityName]);

    return (
        < SelectionCityList setSelectionCity={props.setSelectionCity} showInput={props.showInput} cityList={props.search.cityList} getDataCurrentCity={props.getDataCurrentCity} changeFetching={props.changeFetching} showChoiceCity={props.showChoiceCity}/>
    )
}


const mapStateToProps = (state) => ({
    search: state.search,
});

export default connect(mapStateToProps, { getDataCurrentCity, changeFetching, getCityList, showChoiceCity, showInput, setSelectionCity})(SelectionCityListContainer);