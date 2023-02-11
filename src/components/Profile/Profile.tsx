import React, {FC} from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";
import {ProfileType} from "../../redux/profile-reducer";


export type ProfilePropsType = {
    profile: ProfileType | null
}


export const Profile: FC<ProfilePropsType> = ({profile}) => {

    return (
        <>
            <main className={s.content}>
                <ProfileInfo profile={profile}/>
                <MyPostsContainer/>
            </main>
        </>
    );
}