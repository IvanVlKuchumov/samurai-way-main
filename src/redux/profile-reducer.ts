import {PhotoType} from "./redux-store";

export type ProfilePagesType = {
    posts: PostsType[]
    newPostText: string
    profile: ProfileType | null
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
}

export type ProfileType = {
    aboutMe: string
    contacts: ContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotoType
}

export type ContactsType = {
    facebook: string
    website: string
    vk: string
    twitter: string
    instagram: string
    youtube: string
    github: string
    mainLink: string
}

const initialState: ProfilePagesType = {
    posts: [{id: 1, message: 'Hello, my friend!', likesCount: 1},
        {id: 2, message: 'The boy went to success, no luck.', likesCount: 0},
        {id: 3, message: 'Chocolate is not to blame', likesCount: 100500}],
    newPostText: '',
    profile: null
}

export type ProfileReducersType = ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof setUserProfile>

export const profileReducer = (state = initialState, action: ProfileReducersType) => {
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

        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.payload.profile
            }

        default:
            return state
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

export const setUserProfile = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}