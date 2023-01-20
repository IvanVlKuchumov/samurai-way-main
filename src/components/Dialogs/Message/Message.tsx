import React from "react";
import s from "./../Dialogs.module.css";

type Message = {
    message: string

}


export const Message: React.FC<Message> = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}