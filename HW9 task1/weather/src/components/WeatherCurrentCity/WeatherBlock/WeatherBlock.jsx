import React from "react";
import { changeToCelsies, changeToFahrenheit } from "../../../common/helpFuncWithDeg";
import { getDay, getWeekDay } from "../../../common/helpFuncWithTime";
import logoCloud from './../../../assests/svg/cloud.svg';
import style from './WeatherBlock.module.scss'

const WeatherBlock = ({ dataWeatherTime, temp, degCelsius }) => {
    const weekDay = getWeekDay(new Date(dataWeatherTime * 1000)).substring(0, 3);
    const day = getDay(dataWeatherTime);
    const round = Math.round;

    return (
        <>
            <div className={style.temp}>
                <div className={style.temp_deg}>
                    <p className={style.temp_txt}>{degCelsius ? round(changeToCelsies(temp)) : round(changeToFahrenheit(temp))}</p>
                    <div className={style.temp_deg_span}>{degCelsius ? 'C' : 'F'}</div>
                </div>
                <img className={style.temp_logo} src={logoCloud} alt='' />
                <div className={style.temp_time}>
                <p className={style.temp_txt}>{day}</p>
                <p className={style.temp_txt}>{weekDay}</p>
                </div>
            </div>
        </>

    )
}

export default WeatherBlock;