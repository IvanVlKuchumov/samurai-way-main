import React from 'react';
import {AppStateType} from "../../redux/redux-store";
import {
    follow,
    getUsers,
    toggleFollowingProgressAC,
    toggleIsFetchingAC,
    unFollowAC,
    UserType
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader";
import {usersAPI} from '../../api/api';
import {Dispatch} from 'redux';

export type MapStatePropsType = {
    users: UserType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type MapDispatchPropsType = {
    follow: (userID: number) => void
    unfollow: (userID: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersAPIComponent extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged(page: number) {
        this.props.getUsers(page, this.props.pageSize)
    }

    followUser(userID: number) {
        this.props.follow(userID)
    }

    unfollowUser(userID: number) {
        this.props.toggleFollowingProgress(true, userID)
        usersAPI.unfollowUser(userID)
            .then(data => {
                if (data.resultCode === 0) {
                    this.props.unfollow(userID)
                }
                this.props.toggleFollowingProgress(false, userID)
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

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        follow: (userID: number) => {
            follow(userID)(dispatch)
        },
        unfollow: (userID: number) => {
            dispatch(unFollowAC(userID))
        },
        toggleIsFetching: (isFetching: boolean) => {
            dispatch(toggleIsFetchingAC(isFetching))
        },
        toggleFollowingProgress: (isFetching: boolean, userId: number) => {
            dispatch(toggleFollowingProgressAC(isFetching, userId))
        },
        getUsers: (currentPage: number, pageSize: number) => {
            getUsers(currentPage, pageSize)(dispatch)
        }
    }

}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)
