import { connect } from "react-redux";
import { changeFetching, getDataCurrentCity } from "../../redux/get-city-reducer";
import { setSelectionCity } from "../../redux/search-reducer";
import PopularCity from "./PopularCity";

const mapStateToProps = (state) => ({
    popularCity: state.popularCity,
})
export default connect(mapStateToProps, {getDataCurrentCity, changeFetching, setSelectionCity})(PopularCity)