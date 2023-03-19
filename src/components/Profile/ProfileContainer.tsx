import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, ProfileType, setUsersProfile, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


type PathParamsType = {
    userId: any
}

export type MapStatePropsType = {
    profile: ProfileType | null
    status: string
}

export type MapDispatchPropsType = {
    setUserProfile: (userId: number) => void
    getStatus: (userId: number) => void
    updateStatus: (status: string) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(userId)
        this.props.getStatus(userId)
    }

    render() {

        return (
            <>
                <Profile profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (userId: number) => {
            setUsersProfile(userId)(dispatch)
        },
        getStatus: (userId: number) => {
            getStatus(userId)(dispatch)
        },
        updateStatus: (status: string) => {
            updateStatus(status)(dispatch)
        }
    }
}


export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileAPIContainer)


