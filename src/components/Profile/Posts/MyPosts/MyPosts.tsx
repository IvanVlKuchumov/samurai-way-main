import React from "react";
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <>
                <textarea></textarea>
                <button>Add post</button>
                <Post messages="Hello, my friend!" likeCount={1} />
                <Post messages="The boy went to success, no luck." likeCount={0}/>
                <Post messages="Chocolate is not to blame" likeCount={100500}/>
        </>
    );
}