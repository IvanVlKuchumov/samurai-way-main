import {DispatchType} from "./redux-store";

export type PostPagesType = {
    posts: PostsType[]
    newPostText: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

const initialState: PostPagesType = {
    posts: [{id: 1, message: 'Hello, my friend!', likesCount: 1},
        {id: 2, message: 'The boy went to success, no luck.', likesCount: 0},
        {id: 3, message: 'Chocolate is not to blame', likesCount: 100500}],
    newPostText: ''
}

export const profileReducer = (state = initialState, action: DispatchType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case 'UPDATE-NEW-POST':
            state.newPostText = action.payload.newPost
            return {
                ...state,
                newPostText: action.payload.newPost
            }

    }
    return state
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