import React from "react";
import {sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";


export const DialogsContainer = () => {


    return (<StoreContext.Consumer>
        {
            store => {
                const state = store.getState()
                const updateNewMessageBody = (body: string) => {
                    store.dispatch(updateNewMessageBodyAC(body))
                }
                const sendMessage = () => {
                    store.dispatch(sendMessageAC())
                }

                return (
                    <Dialogs
                        dialogsPages={state.dialogsPages}
                        updateNewMessageBody={updateNewMessageBody}
                        sendMessage={sendMessage}
                    />
                )
            }
        }
    </StoreContext.Consumer>)

}