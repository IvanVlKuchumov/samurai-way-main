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
}

export type RootStateType = {
    postPages: PostPagesType
    dialogsPages: DialogsPagesType
}

export type StorePropsType = {
    _state: RootStateType
    getState: () => RootStateType
    subscribe: (observer: (state: RootStateType) => void) => void
    dispatch: (action:DispatchType) =>  void
}

export type DispatchType =  ReturnType<typeof addPostAction> | ReturnType<typeof updateNewPostAction>

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
                {id: 3, message: "Good morning!"}]
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
            }
        }

    }
}

const addPostAction = () => {
    return {
        type: 'ADD-POST'
    } as const
}

const updateNewPostAction = (newPost:string) => {
    return {
        type: 'UPDATE-NEW-POST',
        payload: {
            newPost
        }
    } as const
}