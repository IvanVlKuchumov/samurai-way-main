import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"
import {PostPagesType} from "../../../../redux/state";



export const MyPosts:React.FC<PostPagesType> = (props) => {

    const postsElements = props.posts.map(p => <Post messages={p.message} likeCount={p.likesCount}/>)

    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea className={s.textarea}></textarea>
            </div>
            <button>Add post</button>
            <div>{postsElements}</div>
        </div>
    );
}