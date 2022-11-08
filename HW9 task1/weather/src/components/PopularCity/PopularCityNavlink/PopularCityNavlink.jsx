import React from "react";
import { NavLink } from "react-router-dom";
import style from './../PopularCity.module.scss'

const PopularCityNavlink = ({ getDataCurrentCity, changeFetching, name, id, setSelectionCity, }) => {
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
        {/* <p> </p> */}
        </div>
    )
}

export default PopularCityNavlink;