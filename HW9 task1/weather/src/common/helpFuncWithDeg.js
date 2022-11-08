export const changeToCelsies = (deg) => {
    return deg - 273.15;
    // return (deg - 32) * 5/9;
}

export const changeToFahrenheit = (deg) => {
    return (deg - 273.15) * 9/5 + 32;
}