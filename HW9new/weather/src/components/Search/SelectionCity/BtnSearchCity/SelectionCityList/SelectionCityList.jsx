import style from './SelectionCityList.module.scss'
import React from "react";
import { NavLink } from 'react-router-dom';


const SelectionCityList = ({setSelectionCity, showInput, cityList, getDataCurrentCity, changeFetching, showChoiceCity }) => {

    return (
        <div className={style.city}>
            {cityList.length > 1 &&
                cityList.map(el => {
                    return (
                        <div className={style.city_list}>
                            <NavLink onClick={() => {
                                getDataCurrentCity(el.id);
                                changeFetching(true);
                                showChoiceCity(false);
                                showInput();
                                setSelectionCity(el.name)
                            }} to={`/city/${el.name.split(' ').join('')}`} className={style.city_list_txt}>{el.name}</NavLink>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default SelectionCityList;