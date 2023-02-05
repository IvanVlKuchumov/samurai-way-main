import React from 'react';
import {UsersPagesType, UserType} from "../../redux/users-reducer";
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user.svg'


export class Users extends React.Component<any, any> {
    getUsers() {
        if (this.usersPage.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.setUsers(response.data.items)
            })
        }
    }

    render() {
        return (
            <div>
                {this.usersPage.users.map(u =>
                        <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatar} src={u.photos.small ?? userPhoto} alt={'avatar'}/>
                    </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.follow(u.id)
                                }}>Follow</button>}
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
};

