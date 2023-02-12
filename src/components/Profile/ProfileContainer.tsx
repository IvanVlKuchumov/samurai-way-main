import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";


type PathParamsType = {
    userId: string
}

export type MapStatePropsType = {
    profile: ProfileType | null
}

export type MapDispatchPropsType = {
    setUserProfile: (profile:ProfileType)=>void
}

type OwnPropsType = MapStatePropsType & MapDispatchPropsType

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType


export class ProfileAPIContainer extends React.Component <PropsType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <div>
                <Profile profile={this.props.profile}/>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePages.profile

})

export const WithUrlDataContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainer)

