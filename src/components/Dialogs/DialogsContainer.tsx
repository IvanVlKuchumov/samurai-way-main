import React from "react";
import {StorePropsType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerType = {
    store: StorePropsType
}


export const DialogsContainer: React.FC<DialogsContainerType> = (props) => {

    const state = props.store.getState()

    const updateNewMessageBody = (body: string) => {
        props.store.dispatch(updateNewMessageBodyAC(body))
    }


    const sendMessage = () => {
        props.store.dispatch(sendMessageAC())
    }

    return (
        <Dialogs
            dialogsPages={state.dialogsPages}
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
        />
    )
}