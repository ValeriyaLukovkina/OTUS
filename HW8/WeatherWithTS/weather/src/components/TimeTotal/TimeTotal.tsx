import style from './TimeTotal.module.scss';
import Time from './Time/Time';
import { addZero } from '../../common/helpFuncWithTime';

type PropsType = {
    sunrise: number,
    sunset: number,
    currentTime: string,
    timeZone: number
}



const TimeTotal: React.FC<PropsType> = ({sunrise, sunset, currentTime, timeZone}) => {
    const getTime = (date: Date): string => `${addZero(date.getUTCHours())}:${addZero(date.getUTCMinutes())}`;

    const timeSunrise: string = getTime(new Date((sunrise + timeZone) * 1000));
    const timeSunset: string = getTime(new Date((sunset + timeZone) * 1000));

    return (
        <div className={style.wrp}>
            <Time time={timeSunrise} name='Sunrise'/>
            <Time time={currentTime} name='Current time'/>
            <Time time={timeSunset} name='Sunset'/>
        </div>
    )
}

export default TimeTotal;