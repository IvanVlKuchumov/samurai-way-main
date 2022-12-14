import React from "react";
import s from "./Post.module.css"
export type PropsPostType = {
    messages: string
    likeCount: number
}

export const Post: React.FC<PropsPostType> = (props) => {
    return (
        <>
            <div className={s.item}>
                <img className={s.img}
                    src='https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector.png}'
                    alt='avatar'/>
                {props.messages}
            </div>
            <span>Like {props.likeCount}</span>
        </>
    );
}