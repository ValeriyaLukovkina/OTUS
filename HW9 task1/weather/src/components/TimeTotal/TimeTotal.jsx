import style from './TimeTotal.module.scss';
import Time from './Time/Time';
import { addZero } from '../../common/helpFuncWithTime';

const TimeTotal = ({sunrise, sunset, currentTime, timeZone}) => {
    const getTime = (date) => `${addZero(date.getUTCHours())}:${addZero(date.getUTCMinutes())}`;

    const timeSunrise = getTime(new Date((sunrise + timeZone) * 1000));
    const timeSunset = getTime(new Date((sunset + timeZone) * 1000));

    return (
        <div className={style.wrp}>
            <Time time={timeSunrise} name='Sunrise'/>
            <Time time={currentTime} name='Current time'/>
            <Time time={timeSunset} name='Sunset'/>
        </div>
    )
}

export default TimeTotal;