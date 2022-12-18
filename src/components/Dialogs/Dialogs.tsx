import React from "react";
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

type DialogsType = {
    id: number,
    name: string,
}

type Message = {
    message:string,
}

export const Dialogs: React.FC<DialogsType> = (props) => {
    const DialogsItem: React.FC<DialogsType> = (props) => {
        let path = '/dialogs/' + props.id
        return (
            <div className={s.dialog + ' ' + s.active}>
                <NavLink to={path}>{props.name}</NavLink>
            </div>
        )
    }
    const Message: React.FC<Message> = (props) => {
        return (
            <div className={s.message}>
                {props.message}
            </div>
        )
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogsItem name="Biba" id={1}/>
                <DialogsItem name="Boba" id={2}/>
                <DialogsItem name="Buba" id={3}/>
            </div>
            <div className={s.messages}>
                <Message message="Hello world!"/>
                <Message message="What's up?"/>
                <Message message="Good morning!"/>
            </div>
        </div>
    )
}