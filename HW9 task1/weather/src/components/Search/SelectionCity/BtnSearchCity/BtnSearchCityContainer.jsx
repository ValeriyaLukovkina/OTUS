import React from "react";
import { connect } from "react-redux";
import { selectCityName, showInput } from "../../../../redux/search-reducer";
import BtnSearchCity from "./BtnSearchCity";

const mapStateToProps = (state) => ({
    search: state.search,
});

const BtnSearchCityContainer = connect(mapStateToProps, { showInput, selectCityName })(BtnSearchCity);

export default BtnSearchCityContainer;