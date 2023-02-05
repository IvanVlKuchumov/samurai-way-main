import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";





export const Profile = () => {

    return (
        <>
            <main className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer/>
            </main>
        </>
    );
}