import { connect } from "react-redux";
import { changeFetching, getDataCurrentCity } from "../../redux/get-city-reducer";
import { AppStateType } from "../../redux/redux-store";
import { setSelectionCity } from "../../redux/search-reducer";
import { CityItemType } from "../../type/type";
import PopularCity from "./PopularCity";

type MapStateToPropsType = {
    popularCityList: Array<CityItemType>,
}

type MapDispatchToPropsType = {
    getDataCurrentCity: (id: number) => void,
    changeFetching: (boolFetching: boolean) => void,
    setSelectionCity: (cityName: string) => void 
}

export type PropsType = MapStateToPropsType & MapDispatchToPropsType

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    popularCityList: state.popularCity.popularCityList,
})

export default connect(mapStateToProps, {getDataCurrentCity, changeFetching, setSelectionCity})(PopularCity)