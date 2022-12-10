import React from "react";
import s from "./Post.module.css"

export const Post = () => {
    return (
        <>
            <div className={s.item}>
                <img className={s.img}
                    src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png}'
                    alt='avatar'/>
                My post
            </div>
        </>
    );
}