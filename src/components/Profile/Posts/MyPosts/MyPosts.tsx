import React from "react";
import {Post} from "./Post/Post";
export const MyPosts = () => {
    return (
        <>
                <textarea></textarea>
                <button>Add post</button>
                <Post />
                <Post />
                <Post />
        </>
    );
}