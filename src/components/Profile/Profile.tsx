import React, {FC} from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatus: (status: string) => void
}


export const Profile: FC<ProfilePropsType> = ({profile, status, updateStatus}) => {

    return (
        <>
            <main className={s.content}>
                <ProfileInfo profile={profile} status={status} updateStatus={updateStatus}/>
                <MyPostsContainer/>
            </main>
        </>
    );
}