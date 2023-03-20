
export type DialogsPagesType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
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
        {id: 3, message: "Good morning!"}]
}

export type DialogsReducersType =
    ReturnType<typeof sendMessageAC>

export const dialogsReducer = (state = initialState, action: DialogsReducersType): DialogsPagesType => {
    switch (action.type) {
        case 'SEND-MESSAGE':
            const newMessage: MessagesType = {
                id: 4,
                message: action.payload.message,
            }
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        default:
            return state
    }
}


export const sendMessageAC = (message: string) => {
    return {
        type: 'SEND-MESSAGE',
        payload: {
            message
        }
    } as const
}