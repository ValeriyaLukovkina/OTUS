import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../redux/redux-store";
import SelectionCity from "./SelectionCity";

type MapStateToPropsType = {
    choiceCity: boolean,
    startedSeach: boolean,
    selectionCity: string,
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    choiceCity: state.search.choiceCity, 
    startedSeach: state.search.startedSeach, 
    selectionCity: state.search.selectionCity, 
});


const SelectionCityContainer = connect(mapStateToProps, {})(SelectionCity);

export default SelectionCityContainer;