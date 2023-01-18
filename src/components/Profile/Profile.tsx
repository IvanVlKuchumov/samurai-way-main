import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {DispatchType, PostPagesType} from "../../redux/state";

type PorfileType = {
    postPages: PostPagesType
    dispatch: (action: DispatchType) => void
}


export const Profile:React.FC<PorfileType> = (props) => {

    return (
        <>`
            <main className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.postPages.posts} dispatch={props.dispatch} newPostText={props.postPages.newPostText}/>
            </main>
        </>
    );
}