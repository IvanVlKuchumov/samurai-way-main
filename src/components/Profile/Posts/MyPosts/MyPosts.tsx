import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostPagesType} from "../../../../redux/state";



export const MyPosts:React.FC<PostPagesType> = (props) => {

    const postsElements = props.posts.map(p => <Post messages={p.message} likeCount={p.likesCount}/>)

    const newPostElement = React.createRef<HTMLTextAreaElement>()

    const addPost = () => {
        const text = newPostElement.current?.value
        alert(text)
    }

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea ref={newPostElement} className={s.textarea}></textarea>
            </div>
            <button onClick={addPost}>Add post</button>
            <div>{postsElements}</div>
        </div>
    );
}