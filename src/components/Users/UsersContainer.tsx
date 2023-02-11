import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {
    followAC,
    setCurrentPageAC,
    setTotalUsersCount,
    setUsersAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import axios from "axios";
import {Users} from "./Users";

export type MapStatePropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

class UsersAPIComponent extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsers(response.data.totalCount)
            })
    }

    onPageChanged(page: number) {
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`)
            .then(response => {
                console.log('hey')
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        return (
            <Users
                users={this.props.users}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged.bind(this)}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPages.users,
        totalUsersCount: state.usersPages.totalUsersCount,
        pageSize: state.usersPages.pageSize,
        currentPage: state.usersPages.currentPage
    }
}


export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    setTotalUsers: (totalCount: number) => void
}



const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID) => {
            dispatch(followAC(userID))
        },
        unFollow: (userID) => {
            dispatch(unFollowAC(userID))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (page) => {
            dispatch(setCurrentPageAC(page))
        },
        setTotalUsers: (totalCount) => {
            dispatch(setTotalUsersCount(totalCount))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

