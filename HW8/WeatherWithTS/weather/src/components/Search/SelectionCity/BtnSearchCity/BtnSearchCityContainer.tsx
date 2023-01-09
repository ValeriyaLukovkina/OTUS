import React from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../../../redux/redux-store";
import { selectCityName, showInput } from "../../../../redux/search-reducer";
import BtnSearchCity from "./BtnSearchCity";

type MapStateToPropsType = {
    startedSeach: boolean,
    selectionCity: string,
    cityName: string
}
type MapDispatchToPropsType = {
    showInput: () => void,
    selectCityName: (name: string) => void,
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    startedSeach: state.search.startedSeach,
    selectionCity: state.search.selectionCity,
    cityName: state.search.cityName,
});

// <MapStateToPropsType, MapDispatchToPropsType, AppStateType>

const BtnSearchCityContainer = connect(
    mapStateToProps, { showInput, selectCityName })(BtnSearchCity);

export default BtnSearchCityContainer;