import React, {FC} from "react";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';
import icon from '../../assets/images/icon.svg'

type HeaderPropsType = {
    isAuth: boolean
    login: string

}

export const Header: FC<HeaderPropsType> = ({isAuth, login}) => {
    return (
        <header className={s.header}>
            <img src={icon} alt={'label'}/>
            <div className={s.loginBlock}>
                { isAuth
                    ? login
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}