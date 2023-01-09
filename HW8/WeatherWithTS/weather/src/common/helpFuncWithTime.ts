export const addZero = (num: number): number | string => {
    if (num < 10) {
        return '0' + num;
    }
    return num;
}

export const getCurrentTime = (timeZone: number): Date => {
    const currentTimeSec = +new Date() / 1000 + timeZone;
    return new Date(currentTimeSec * 1000);
}

export const getFullDate = (date: Date): string => {
    let nameMonth = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return `${addZero(date.getUTCDate())} ${nameMonth[date.getUTCMonth()]} ${date.getUTCFullYear()}`
}

export const getWeekDay = (date: Date): string => {
    let nameWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return nameWeek[date.getUTCDay()]
}

export const getTime = (date: Date): string => `${addZero(date.getUTCHours())}:${addZero(date.getUTCMinutes())}`

export const getDay = (timeUTC: number): number => {
    return new Date(timeUTC * 1000).getUTCDate()
}