import React from "react";
import PopularCityNavlink from "./PopularCityNavlink/PopularCityNavlink";
import style from './PopularCity.module.scss'

const PopularCity = ({popularCity ,getDataCurrentCity, changeFetching, setSelectionCity, }) => {
    return (
        <div className={style.city}>
            {popularCity.popularCityList.map(el => {
                return <PopularCityNavlink setSelectionCity={setSelectionCity} key={el.id} name={el.name} id={el.id} getDataCurrentCity={getDataCurrentCity} changeFetching={changeFetching}/>
            })}
        </div>
    )
}

export default PopularCity;