import React from "react";
import logoLoading from './../../assests/svg/loading.svg';
import style from './Loading.module.scss'

const Loading = (props) => {
    return (
        <div className={style.loading}>
            <img className={style.loading_logo} src={logoLoading} alt='loading' />
        </div>
    )
}

export default Loading;