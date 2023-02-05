import React from "react";
import {AppStateType} from "../../../../redux/redux-store";
import {addPostAC, PostsType, updateNewPostAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: PostsType[]
    newPostText: string
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.postPages.posts,
        newPostText: state.postPages.newPostText
    }
}

type MapDispatchPropsType = {
    updateNewPost: (body: string) => void
    addPost: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewPost: (body: string) => {
            dispatch(updateNewPostAC(body))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)