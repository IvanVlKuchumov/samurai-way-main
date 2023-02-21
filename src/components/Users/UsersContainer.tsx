import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers, toggleFollowingProgress,
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
    followingInProgress: boolean
}

export type MapDispatchPropsType = {
    follow: (userID: number) => ReturnType<typeof follow>
    unFollow: (userID: number) => ReturnType<typeof unFollow>
    setUsers: (users: Array<UserType>) => ReturnType<typeof setUsers>
    setCurrentPage: (page: number) => ReturnType<typeof setCurrentPage>
    toggleIsFetching: (isFetching: boolean) => ReturnType<typeof toggleIsFetching>
    setTotalUsersCount: (totalCount: number) => ReturnType<typeof setTotalUsersCount>
    toggleFollowingProgress: (followingInProgress: boolean) => ReturnType<typeof toggleFollowingProgress>
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

    followUser(userID: number) {
        this.props.toggleFollowingProgress(true)
        usersAPI.followUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.follow(userID)
                }
                this.props.toggleFollowingProgress(false)
            })

    }

    unfollowUser(userID: number) {
        this.props.toggleFollowingProgress(true)
        usersAPI.unfollowUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unFollow(userID)
                }
                this.props.toggleFollowingProgress(false)
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
                    followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPages.isFetching,
        followingInProgress: state.usersPages.followingInProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unFollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching,
    toggleFollowingProgress
})(UsersAPIComponent)

