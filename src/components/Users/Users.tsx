import React from 'react';
import {UsersPagesType} from "../../redux/users-reducer";
import s from "./Users.module.css";

type UsersType = {
    usersPage: UsersPagesType
    follow: (userID: number) => void
    unFollow: (userID: number) => void
}

export const Users: React.FC<UsersType> = ({usersPage, follow, unFollow}) => {

    return (
        <div>
            {usersPage.users.map(u =>
                <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatar} src={u.avatarUrl} alt={'avatar'}/>
                    </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {unFollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {follow(u.id)}}>Follow</button>}
                        </div>
                </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>
            )}
        </div>
    );
};

