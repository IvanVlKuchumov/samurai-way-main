import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose, Dispatch} from 'redux';
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


type PathParamsType = {
    userId: any
}

export type MapStatePropsType = {
    profile: ProfileType | null
}

export type MapDispatchPropsType = {
    setUserProfile: (userId: number) => void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIContainer extends React.Component <PropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.setUserProfile(+userId)
    }

    render() {

        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        )
    }
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePages.profile,
})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (userId: number) => {
            setUsersProfile(userId)(dispatch)
        }
    }
}


export const ProfileContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(ProfileAPIContainer)


