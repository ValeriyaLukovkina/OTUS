import React from "react";
import style from './BtnSearchCity.module.scss';
import logoSearch from './../../../../assests/svg/search.svg';
import SelectionCityListContainer from "./SelectionCityList/SelectionCityListContainer";

const BtnSearchCity = ({showInput, search, selectCityName, }) => {
    return (
        <div className={style.search_city}>
            <button onClick={showInput} className={
                style.search_city_btn + ' ' + (search.startedSeach && style.search_city_btn_absolute) }>
                <img src={logoSearch} className={style.btn_search_logo} alt="search" />
            </button>
            <div className={
                style.search_city_wrp
            }>
                <input onChange={(e) => selectCityName(e.target.value)}
                placeholder={search.selectionCity} className={style.search_city_input + ' ' + (!search.startedSeach && style.search_city_input_hidden)} autoFocus/>
                {(search.cityName.length > 0) && <SelectionCityListContainer />}
            </div>
        </div>
    )
}

export default BtnSearchCity;