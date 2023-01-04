import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType} from "../../redux/state";

type PorfileType = {
    posts: PostsType[]
    addPost: (postMessages: string) => void
}


export const Profile:React.FC<PorfileType> = (props) => {

    return (
        <>`
            <main className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts} addPost={props.addPost}/>
            </main>
        </>
    );
}