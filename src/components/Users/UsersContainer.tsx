import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching,
    unFollow,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from '../../api/api';

export type MapStatePropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
}

export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: Array<UserType>) => void
    setCurrentPage: (page: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    setTotalUsersCount: (totalCount: number) => void
}



class UsersAPIComponent extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.toggleIsFetching(true)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
            })
    }

    onPageChanged(page: number) {
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize)
            .then(data => {
                this.props.setUsers(data.items)
            })
    }

    followUser (userID: number) {
        usersAPI.followUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userID)
                }
            })

    }

    unfollowUser (userID: number) {
        usersAPI.unfollowUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unFollow(userID)
                }
            })

    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    users={this.props.users}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged.bind(this)}
                    followUser={this.followUser.bind(this)}
                    unfollowUser={this.unfollowUser.bind(this)}
                />
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.usersPages.users,
        totalUsersCount: state.usersPages.totalUsersCount,
        pageSize: state.usersPages.pageSize,
        currentPage: state.usersPages.currentPage,
        isFetching: state.usersPages.isFetching
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching
})(UsersAPIComponent)

