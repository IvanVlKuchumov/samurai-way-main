import React from 'react';
import s from "./Users.module.css";
import axios from "axios";
import userPhoto from '../../assets/images/user.svg'
import {MapDispatchPropsType, MapStatePropsType} from "./UsersContainer";


export class Users extends React.Component<MapStatePropsType & MapDispatchPropsType> {
    constructor(props:MapStatePropsType & MapDispatchPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <div>
                {this.props.usersPage.users.map(u =>
                        <div key={u.id}>
                <span>
                    <div>
                        <img className={s.avatar} src={u.photos.small ?? userPhoto} alt={'avatar'}/>
                    </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    this.props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    this.props.follow(u.id)
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
}



