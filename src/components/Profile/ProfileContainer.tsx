import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUsersProfile} from "../../redux/profile-reducer";
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";
import {Dispatch} from 'redux';


type PathParamsType = {
    userId: any
}

export type MapStatePropsType = {
    profile: ProfileType | null
    isAuth: boolean
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
        if (!this.props.isAuth) return <Redirect to={'/login'}/>

        return (
            <>
                <Profile profile={this.props.profile}/>
            </>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePages.profile,
    isAuth: state.auth.isAuth

})

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setUserProfile: (userId: number) => {
            setUsersProfile(userId)(dispatch)
        }
    }
}

export const WithUrlDataContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(WithUrlDataContainer)

