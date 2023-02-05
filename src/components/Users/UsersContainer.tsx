import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unFollowAC, UsersPagesType, UserType} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Dispatch} from "redux";

type MapStatePropsType = {
    usersPage: UsersPagesType
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.usersPages
    }
}


type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users:Array<UserType>) => void
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

