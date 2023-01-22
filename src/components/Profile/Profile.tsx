import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StorePropsType} from "../../redux/redux-store";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";


type ProfileType = {
    store: StorePropsType
}


export const Profile:React.FC<ProfileType> = (props) => {

    return (
        <>
            <main className={s.content}>
                <ProfileInfo/>
                <MyPostsContainer store={props.store}/>
            </main>
        </>
    );
}