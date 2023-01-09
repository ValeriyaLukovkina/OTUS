export const changeToCelsies = (deg: number): number => {
    return deg - 273.15;
    // return (deg - 32) * 5/9;
}

export const changeToFahrenheit = (deg: number): number => {
    return (deg - 273.15) * 9/5 + 32;
}