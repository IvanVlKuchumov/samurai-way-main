import React from "react";
import {AppStateType} from "../../../../redux/redux-store";
import {addPostAC, PostPagesType, updateNewPostAC} from "../../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";


// export const MyPostsContainer: React.FC<MyPostsContainerTypes> = (props) => {
//
//     const state = props.store.getState()
//
//     const addPost = () => {
//         props.store.dispatch(addPostAC())
//     }
//
//     const onPostChange = (text: string) => {
//         props.store.dispatch(updateNewPostAC(text))
//     }
//
//     return (<MyPosts
//         newPostText={state.postPages.newPostText}
//         posts={state.postPages.posts}
//         updateNewPost={onPostChange}
//         addPost={addPost}
//     />);
// }

type MapStatePropsType = {
    postPages: PostPagesType
}
const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        postPages: state.postPages
    }
}

type MapDispatchPropsType = {
    onPostChange: (body: string) => void
    addPost: () => void
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        onPostChange: (body: string) => {
            dispatch(updateNewPostAC(body))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)