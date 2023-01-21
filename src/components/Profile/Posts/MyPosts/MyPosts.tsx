import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {DispatchType, PostsType} from "../../../../redux/state";
import {addPostAC, updateNewPostAC} from "../../../../redux/profile-reducer";


type MyPostsTypes = {
    posts: PostsType[]
    newPostText: string
    dispatch: (action: DispatchType) => void
}


export const MyPosts: React.FC<MyPostsTypes> = (props) => {

    const postsElements = props.posts.map(p => <Post messages={p.message} likeCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.dispatch(addPostAC())
        }
    }
    const onChangeTextareaHandler = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.dispatch(updateNewPostAC(text))
        }
    }

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText} onChange={onChangeTextareaHandler} ref={newPostElement}
                          className={s.textarea}/>
            </div>
            <button onClick={addPost}>Add post</button>
            <div>{postsElements}</div>
        </div>
    );
}