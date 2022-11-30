import React from "react";
import style from './SelectionCity.module.scss';
import logoLocation from './../../../assests/svg/location.svg';
import BtnSearchCityContainer from "./BtnSearchCity/BtnSearchCityContainer";



const SelectionCity = ({search, }) => {
    return (
        <div>
            {search.choiceCity && <div className={style.absolute}></div>}
            <div className={style.city}>
                <div className={style.city_title + ' ' + (search.startedSeach && style.city_title_hidden)}>
                    <img src={logoLocation} className={style.city_title_logo} alt="search" />
                    <h3 className={style.city_title_txt}>{search.selectionCity}</h3>
                </div>
                <BtnSearchCityContainer />
            </div>
        </div>
    )
}
export default SelectionCity;