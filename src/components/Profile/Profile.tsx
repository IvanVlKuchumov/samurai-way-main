import React from "react";
import s from "./Profile.module.css"
import {MyPosts} from "./Posts/MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostPagesType} from "../../redux/state";



export const Profile:React.FC<PostPagesType> = (props) => {

    return (
        <>
            <main className={s.content}>
                <ProfileInfo/>
                <MyPosts posts={props.posts}/>
            </main>
        </>
    );
}