import React from "react";
import {StorePropsType} from "../../../../redux/redux-store";
import {addPostAC, updateNewPostAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";


type MyPostsContainerTypes = {
    store: StorePropsType
}


export const MyPostsContainer: React.FC<MyPostsContainerTypes> = (props) => {

    const state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostAC())
    }

    const onPostChange = (text: string) => {
        props.store.dispatch(updateNewPostAC(text))
    }

    return (<MyPosts
        newPostText={state.postPages.newPostText}
        posts={state.postPages.posts}
        updateNewPost={onPostChange}
        addPost={addPost}
    />);
}