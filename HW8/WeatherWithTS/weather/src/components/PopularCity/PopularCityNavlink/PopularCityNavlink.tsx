import React from "react";
import { NavLink } from "react-router-dom";
import style from './../PopularCity.module.scss'

type PropsType = {
    name: string,
    id: number,
    getDataCurrentCity: (id: number) => void,
    changeFetching: (boolFetching: boolean) => void,
    setSelectionCity: (cityName: string) => void 
}

const PopularCityNavlink: React.FC<PropsType> = ({ getDataCurrentCity, changeFetching, name, id, setSelectionCity, }) => {
    return (
        <div className={style.city_block}>
        <NavLink
        onClick={() => {
            getDataCurrentCity(id);
            changeFetching(true);
            setSelectionCity(name)
        }}
            to={`/city/${name.split(' ').join('')}`}
            className={style.city_link}>{name}
        </NavLink>
        </div>
    )
}

export default PopularCityNavlink;