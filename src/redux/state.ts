import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";


export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type DialogsType = {
    id: number
    name: string
}

export type PostPagesType = {
    posts: PostsType[]
    newPostText: string
}

export type DialogsPagesType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageBody: string
}

export type RootStateType = {
    postPages: PostPagesType
    dialogsPages: DialogsPagesType
}

export type StorePropsType = {
    _state: RootStateType
    _onChange: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: DispatchType) => void
}

export type DispatchType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export const store: StorePropsType = {
    _state: {
        postPages: {
            posts: [{id: 1, message: 'Hello, my friend!', likesCount: 1},
                {id: 2, message: 'The boy went to success, no luck.', likesCount: 0},
                {id: 3, message: 'Chocolate is not to blame', likesCount: 100500}],
            newPostText: ''
        },
        dialogsPages: {
            dialogs: [{id: 1, name: 'Biba'},
                {id: 2, name: 'Boba'},
                {id: 3, name: 'Buba'}],
            messages: [{id: 1, message: "Hello world!"},
                {id: 2, message: "What's up?"},
                {id: 3, message: "Good morning!"}],
            newMessageBody: ''
        }
    },
    _onChange() {
        console.log('state change')
    },
    getState() {
        return this._state
    },
    subscribe(observer) {
        this._onChange = observer
    },
    dispatch(action) {
        this._state.postPages = profileReducer(this._state.postPages, action)
        this._state.dialogsPages = dialogsReducer(this._state.dialogsPages, action)
        this._onChange()

    }
}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}

export const updateNewPostAC = (newPost: string) => {
    return {
        type: 'UPDATE-NEW-POST',
        payload: {
            newPost
        }
    } as const
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
