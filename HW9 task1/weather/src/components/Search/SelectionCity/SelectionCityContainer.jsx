import React from "react";
import { connect } from "react-redux";
import { getDataCurrentCity } from "../../../redux/get-city-reducer";
import { selectCityName, showChoiceCity, showInput } from "../../../redux/search-reducer";
import SelectionCity from "./SelectionCity";


const mapStateToProps = (state) => ({
    search: state.search,
});


const SelectionCityContainer = connect (mapStateToProps, {})(SelectionCity);

export default SelectionCityContainer;