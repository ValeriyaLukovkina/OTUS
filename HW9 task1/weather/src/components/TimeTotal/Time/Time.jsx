import style from './Time.module.scss';

const Time = ({time, name}) => {

    return (
        <div className={style.time}>
            <h3 className={style.title}>{name}</h3>
            <div className={style.clock}>
                <div className={style.clock_hands}>
                    <span className={style.clock_hands_span}></span>
                </div>
                <div className={style.clock_time}>
                    <p className={style.clock_time_txt}>{time}</p>
                </div>
            </div>
        </div>
    )
}

export default Time;