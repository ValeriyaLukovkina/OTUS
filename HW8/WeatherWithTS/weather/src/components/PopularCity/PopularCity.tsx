import React from "react";
import PopularCityNavlink from "./PopularCityNavlink/PopularCityNavlink";
import style from './PopularCity.module.scss'
import { CityItemType } from "../../type/type";
// import { PropsType } from "./PopularCityContainer";

type PropsType = {
    popularCityList: Array<CityItemType>,
    getDataCurrentCity: (id: number) => void,
    changeFetching: (boolFetching: boolean) => void,
    setSelectionCity: (cityName: string) => void 
}

const PopularCity: React.FC<PropsType> = ({popularCityList ,getDataCurrentCity, changeFetching, setSelectionCity, }) => {
    return (
        <div className={style.city}>
            {popularCityList.map(el => {
                return <PopularCityNavlink setSelectionCity={setSelectionCity} key={el.id} name={el.name} id={el.id} getDataCurrentCity={getDataCurrentCity} changeFetching={changeFetching}/>
            })}
        </div>
    )
}

export default PopularCity;