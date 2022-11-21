export const addZero = (num) => {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

export const getCurrentTime = (timeZone) => {
    const currentTimeSec = +new Date() / 1000 + timeZone;
    return new Date(currentTimeSec * 1000);
}

export const getFullDate = (date) => {
    let nameMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${addZero(date.getUTCDate())} ${nameMonth[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}

export const getWeekDay = (date) => {
    let nameWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return nameWeek[date.getUTCDay()]
}

export const getTime = (date) => `${addZero(date.getUTCHours())}:${addZero(date.getUTCMinutes())}`

export const getDay = (timeUTC) => {
    return new Date(timeUTC * 1000).getUTCDate()
}