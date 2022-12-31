import React from "react";
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../redux/state";




export const DialogsItem: React.FC<DialogsType> = (props) => {
    const path = '/dialogs/' + props.id

    const newMessage = React.createRef<HTMLTextAreaElement>()
    const addPost = () => {
        const text = newMessage.current?.value
        alert(text)
    }

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
            <textarea ref={newMessage}></textarea>
            <button onClick={addPost}>Submit</button>
        </div>
    )
}