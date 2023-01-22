export type DialogsPagesType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type DialogsType = {
    id: number
    name: string
}

export type MessagesType = {
    id: number
    message: string
}


const initialState: DialogsPagesType = {
    dialogs: [{id: 1, name: 'Biba'},
        {id: 2, name: 'Boba'},
        {id: 3, name: 'Buba'}],
    messages: [{id: 1, message: "Hello world!"},
        {id: 2, message: "What's up?"},
        {id: 3, message: "Good morning!"}],
    newMessageBody: ''
}

export const dialogsReducer = (state = initialState, action: ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>) => {
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

export const updateNewMessageBodyAC = (newMessageBody: string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-BODY',
        payload: {
            newMessageBody
        }
    } as const
}

export const sendMessageAC = () => {
    return {
        type: 'SEND-MESSAGE',
    } as const
}