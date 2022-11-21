import React, { useState } from "react";
import logoWeather from './../../assests/svg/weather.svg';
import logoWind from './../../assests/svg/wind.svg';
import logoDrow from './../../assests/svg/drow.svg';
import style from './WeatherCurrentCity.module.scss'
import WeatherBlock from "./WeatherBlock/WeatherBlock";
import TimeTotal from "../TimeTotal/TimeTotal";
import { getCurrentTime, getFullDate, getTime, getWeekDay } from "../../common/helpFuncWithTime";
import { changeToCelsies, changeToFahrenheit } from "../../common/helpFuncWithDeg";

const WeatherCurrentCity = ({ dataWeather, degCelsius, changeValueDeg }) => {

    const currentTime = dataWeather ? getTime(getCurrentTime(dataWeather.city.timezone)) : '';

    const round = Math.round;



    return (
        <>

            {dataWeather &&
                <div className={style.weather}>
                    <div className={style.weather_common}>
                        <img className={style.weather_common_logo} src={logoWeather} alt='' />
                        <div className={style.weather_common_temp}>
                            <button onClick={() => changeValueDeg(false)}
                                className={`${style.weather_common_temp_btn} ${(!degCelsius && style.weather_common_temp_btn_active)}`}>
                                F
                            </button>
                            <button onClick={() => changeValueDeg(true)}
                                className={`${style.weather_common_temp_btn} ${(degCelsius && style.weather_common_temp_btn_active)}`}>
                                C
                            </button>
                        </div>
                    </div>
                    <div className={style.weather_temp}>
                        <h2 className={style.weather_temp_value}>
                            {degCelsius ? round(changeToCelsies(dataWeather.list[0].main.temp)) : round(changeToFahrenheit(dataWeather.list[0].main.temp))}
                        </h2>
                        <div className={style.weather_temp_deg}>{degCelsius ? 'C' : 'F'}</div>
                    </div>
                    <p className={style.weather_date}>{getFullDate(getCurrentTime(dataWeather.city.timezone))}</p>
                    <div className={style.weather_time}>
                        <p className={style.weather_time_txt}>{getWeekDay(getCurrentTime(dataWeather.city.timezone))}</p>
                        <div className={style.weather_line}></div>
                        <p className={style.weather_time_txt}>{currentTime}</p>
                    </div>
                    <div className={style.weather_value}>
                        <div className={style.weather_value_one}>
                            <img src={logoWind} alt='' />
                            <p className={style.weather_value_txt}>Wind</p>
                            <p>{dataWeather.list[0].wind.speed}</p>
                        </div>
                        <div className={style.weather_line}></div>
                        <div className={style.weather_value_one}>
                            <img src={logoDrow} alt='' />
                            <p className={style.weather_value_txt}>Hum</p>
                            <p>{dataWeather.list[0].main.humidity} %</p>
                        </div>
                    </div>

                    < TimeTotal sunrise={dataWeather.city.sunrise} sunset={dataWeather.city.sunset} currentTime={currentTime} timeZone={dataWeather.city.timezone} />

                    <div className={style.temp}>
                        <WeatherBlock degCelsius={degCelsius} dataWeatherTime={dataWeather.list[8].dt} temp={dataWeather.list[8].main.temp} />
                        <WeatherBlock degCelsius={degCelsius} dataWeatherTime={dataWeather.list[16].dt} temp={dataWeather.list[16].main.temp}  />
                        <WeatherBlock degCelsius={degCelsius} dataWeatherTime={dataWeather.list[24].dt} temp={dataWeather.list[24].main.temp} />
                        <WeatherBlock degCelsius={degCelsius} dataWeatherTime={dataWeather.list[32].dt} temp={dataWeather.list[32].main.temp} />
                    </div>
                </div>
            }
            {/* </>
    } */}
        </>
    )
}

export default WeatherCurrentCity;