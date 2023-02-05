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

export type DialogsReducersType =
    ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const dialogsReducer = (state = initialState, action: DialogsReducersType): DialogsPagesType => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-BODY':
            return {
                ...state,
                newMessageBody: action.payload.newMessageBody
            }
        case 'SEND-MESSAGE':
            const newMessage: MessagesType = {
                id: 4,
                message: state.newMessageBody,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageBody: ''
            }
        default:
            return state
    }
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