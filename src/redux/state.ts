let rerenderEntireTree:(state:RootStateType)=>void

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


export const state: RootStateType = {
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
}

export const addPost = () => {
    const newPost: PostsType = {
        id: 5,
        message: state.postPages.newPostText,
        likesCount: 0
    }
    state.postPages.posts.push(newPost)
    state.postPages.newPostText = ''
    rerenderEntireTree(state)
}

export const updateNewPost = (newPost: string) => {
    state.postPages.newPostText = newPost
    rerenderEntireTree(state)
}

export const subscribe = (observer:(state:RootStateType)=>void) => {
    rerenderEntireTree = observer
}