let rerenderEntireTree: (state: RootStateType) => void

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
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
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
    getState() {
        return this._state
    },
    subscribe(observer: (state: RootStateType) => void) {
        rerenderEntireTree = observer
    },
    dispatch(action) {
        switch (action.type) {
            case 'ADD-POST': {
                const newPost: PostsType = {
                    id: 5,
                    message: this._state.postPages.newPostText,
                    likesCount: 0
                }
                this._state.postPages.posts.push(newPost)
                this._state.postPages.newPostText = ''
                rerenderEntireTree(this._state)
                break
            }
            case 'UPDATE-NEW-POST': {
                this._state.postPages.newPostText = action.payload.newPost
                rerenderEntireTree(this._state)
                break
            }
            case 'UPDATE-NEW-MESSAGE-BODY': {
                this._state.dialogsPages.newMessageBody = action.payload.newMessageBody
                rerenderEntireTree(this._state)
                break
            }
            case 'SEND-MESSAGE': {
                const newMessage: MessagesType = {
                    id: 4,
                    message: this._state.dialogsPages.newMessageBody,
                }
                this._state.dialogsPages.messages.push(newMessage)
                this._state.dialogsPages.newMessageBody = ''
                rerenderEntireTree(this._state)
            }
        }

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