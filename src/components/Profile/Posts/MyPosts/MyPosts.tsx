import React from "react";
import {Post} from "./Post/Post";
import s from "./MyPosts.module.css"

export const MyPosts = () => {
    return (
        <div className={s.content}>
            <h3>My posts</h3>
            <div>
                <textarea className={s.textarea}></textarea>
            </div>
            <button>Add post</button>
            <Post messages="Hello, my friend!" likeCount={1}/>
            <Post messages="The boy went to success, no luck." likeCount={0}/>
            <Post messages="Chocolate is not to blame" likeCount={100500}/>
        </div>
    );
}