import React, {FC} from "react";
import s from "./Header.module.css";
import {NavLink} from 'react-router-dom';
import icon from '../../assets/images/icon.svg'

type HeaderPropsType = {
    isAuth: boolean
    login: string | null,
    logout: () => void
}

export const Header: FC<HeaderPropsType> = ({isAuth, login, logout}) => {
    return (
        <header className={s.header}>
            <img src={icon} alt={'label'}/>
            <div className={s.loginBlock}>
                { isAuth
                    ? <div>{login}  -  <button onClick={logout}>Log out</button></div>
                    : <NavLink to={'/login'}>
                        Login
                    </NavLink>}
            </div>
        </header>
    )
}