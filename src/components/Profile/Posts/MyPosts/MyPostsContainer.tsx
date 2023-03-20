import React from "react";
import {AppStateType} from "../../../../redux/redux-store";
import {addPostAC, PostsType} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


type MapStatePropsType = {
    posts: PostsType[]
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePages.posts
    }
}

type MapDispatchPropsType = {
    addPost: (post: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        addPost: (post) => {
            dispatch(addPostAC(post))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)