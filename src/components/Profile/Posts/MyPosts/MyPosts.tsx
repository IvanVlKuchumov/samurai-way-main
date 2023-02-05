import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostsType} from "../../../../redux/profile-reducer";


type MyPostsTypes = {
    posts: PostsType[]
    newPostText: string
    updateNewPost: (text: string) => void
    addPost: () => void

}


export const MyPosts: React.FC<MyPostsTypes> = (props) => {

    const postsElements = props.posts.map(p => <Post messages={p.message} likeCount={p.likesCount} key={p.id}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const onClickHandler = () => {
        props.addPost()
    }

    const onChangeTextareaHandler = () => {
        const text = newPostElement.current?.value
        if (text) {
            props.updateNewPost(text)
        }
    }

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea value={props.newPostText} onChange={onChangeTextareaHandler} ref={newPostElement}
                          className={s.textarea}/>
            </div>
            <button onClick={onClickHandler}>Add post</button>
            <div>{postsElements}</div>
        </div>
    );
}