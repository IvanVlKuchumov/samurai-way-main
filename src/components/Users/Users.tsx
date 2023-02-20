import React, {FC} from 'react';
import s from "./Users.module.css";
import userPhoto from '../../assets/images/user.svg'
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

export type UsersPropsType = {
    onPageChanged: (page: number) => void
    followUser: (userID: number) => void
    unfollowUser: (userID: number) => void
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
}


export const Users: FC<UsersPropsType> = (props) => {
    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onPageChanged,
        followUser,
        unfollowUser
    } = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map((p, index) => {
                        return <span className={currentPage === p ? s.selectedPage : ''}
                                     onClick={() => onPageChanged(p)} key={index}>{p}</span>
                    }
                )}
            </div>
            {users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                            <img className={s.avatar} src={u.photos.small ?? userPhoto} alt={'avatar'}/>
                        </NavLink>
                    </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {unfollowUser(u.id)}}>Unfollow</button>
                                : <button onClick={() => {followUser(u.id)}}>Follow</button>}
                        </div>
                </span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </div>
            )}
        </div>
    )
}




