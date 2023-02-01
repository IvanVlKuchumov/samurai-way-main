import React from "react";
import s from "./Profile.module.css"
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./Posts/MyPosts/MyPostsContainer";
import {StoreContext} from "../../StoreContext";


export const Profile = () => {

    return (<StoreContext.Consumer>
        {
            store => {
                return (
                    <main className={s.content}>
                        <ProfileInfo/>
                        <MyPostsContainer store={store}/>
                    </main>
                )
            }
        }
    </StoreContext.Consumer>);
}