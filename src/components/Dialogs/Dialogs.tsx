import React from "react";
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../App";

type DialogType = {
    dialogs: Array<DialogsType>,
    messages: Array<MessagesType>,
}

export const Dialogs: React.FC<DialogType> = (props) => {

    const dialogsElements = props.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)
    
    const messagesElements = props.messages.map(m => <Message message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}