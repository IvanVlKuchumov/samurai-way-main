import React from "react";
import {StorePropsType} from "../../redux/redux-store";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {


    <StoreContext.Consumer>
        {const state = store.getState()

            const updateNewMessageBody = (body: string) => {
            store.dispatch(updateNewMessageBodyAC(body))
        }


            const sendMessage = () => {
            store.dispatch(sendMessageAC())
        }
            (return (
            <Dialogs
            dialogsPages={state.dialogsPages}
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
            />
            ))}
    </StoreContext.Consumer>
}