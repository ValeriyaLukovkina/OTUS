import React from "react";
import style from './BtnSearchCity.module.scss';
import logoSearch from './../../../../assests/svg/search.svg';
import SelectionCityListContainer from "./SelectionCityList/SelectionCityListContainer";

type PropsType = {
    showInput: () => void,
    startedSeach: boolean,
    selectionCity: string,
    cityName: string,
    selectCityName: (name: string) => void,
}

const BtnSearchCity: React.FC<PropsType> = ({showInput, startedSeach, selectionCity, cityName, selectCityName, }) => {
    return (
        <div className={style.search_city}>
            <button onClick={showInput} className={
                style.search_city_btn + ' ' + (startedSeach && style.search_city_btn_absolute) }>
                <img src={logoSearch} className={style.btn_search_logo} alt="search" />
            </button>
            <div className={
                style.search_city_wrp
            }>
                <input onChange={(e) => selectCityName(e.target.value)}
                placeholder={selectionCity} className={style.search_city_input + ' ' + (!startedSeach && style.search_city_input_hidden)} autoFocus/>
                {(cityName.length > 0) && <SelectionCityListContainer />}
            </div>
        </div>
    )
}

export default BtnSearchCity;