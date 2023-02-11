import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType, setUserProfile} from "../../redux/profile-reducer";


export type MapStatePropsType = {
    profile: ProfileType | null
}

export type MapDispatchPropsType = {
    setUserProfile: (profile:ProfileType)=>void
}


export class ProfileAPIComponent extends React.Component <MapStatePropsType & MapDispatchPropsType> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/1`)
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

export const ProfileContainer = connect(mapStateToProps, {setUserProfile}) (ProfileAPIComponent)