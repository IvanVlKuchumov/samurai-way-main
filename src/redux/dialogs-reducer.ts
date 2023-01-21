import {DialogsPagesType, DispatchType, MessagesType,} from "./state";

export const dialogsReducer = (state:DialogsPagesType, action:DispatchType) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY': {
            state.newMessageBody = action.payload.newMessageBody
            break
        }
        case 'SEND-MESSAGE': {
            const newMessage: MessagesType = {
                id: 4,
                message: state.newMessageBody,
            }
            state.messages.push(newMessage)
            state.newMessageBody = ''
        }
    }
    return state
}