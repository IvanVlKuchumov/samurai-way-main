import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPagesType} from "../../redux/state";

type PorfileType = {
    postPages: PostPagesType
    addPost: () => void
    updateNewPost: (post:string) => void
}


export const Profile:React.FC<PorfileType> = (props) => {

    return (
        <>`
            <main className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.postPages.posts} updateNewPost={props.updateNewPost} newPostText={props.postPages.newPostText} addPost={props.addPost}/>
            </main>
        </>
    );
}