import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostPagesType} from "../../redux/store";

type ProfileType = {
    postPages: PostPagesType
    dispatch: (action: DispatchType) => void
}


export const Profile:React.FC<ProfileType> = (props) => {

    return (
        <>
            <main className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.postPages.posts} dispatch={props.dispatch} newPostText={props.postPages.newPostText}/>
            </main>
        </>
    );
}