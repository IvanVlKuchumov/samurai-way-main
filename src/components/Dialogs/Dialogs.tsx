import React, {ChangeEvent} from "react";
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPagesType} from "../../redux/dialogs-reducer";

type DialogsType = {
    dialogsPages: DialogsPagesType
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}


export const Dialogs: React.FC<DialogsType> = (props) => {
    const {
        dialogsPages,
        updateNewMessageBody,
        sendMessage,

    } = props

    const dialogsElements = dialogsPages.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    const messagesElements = dialogsPages.messages.map(m => <Message message={m.message}/>)

    const newMessageBody = dialogsPages.newMessageBody

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const body = e.currentTarget?.value
        updateNewMessageBody(body)
    }


    const onSendMessageClick = () => {
        sendMessage()
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageSender}>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onChangeHandler}
                                  placeholder={'Enter you message'}/>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}