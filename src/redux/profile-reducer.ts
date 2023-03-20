import {profileAPI} from '../api/api';
import {Dispatch} from 'redux';


export type ProfilePagesType = {
    posts: PostsType[]
    profile: ProfileType | null
    status: string
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

export type PhotoType = {
    small: string
    large: string
}

const initialState: ProfilePagesType = {
    posts: [{id: 1, message: 'Hello, my friend!', likesCount: 1},
        {id: 2, message: 'The boy went to success, no luck.', likesCount: 0},
        {id: 3, message: 'Chocolate is not to blame', likesCount: 100500}],
    profile: null,
    status: ''
}

export type ProfileReducersType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof setUserProfileAC>
    | ReturnType<typeof setStatusAC>

export const profileReducer = (state = initialState, action: ProfileReducersType) => {
    switch (action.type) {
        case 'ADD-POST':
            const newPost: PostsType = {
                id: 5,
                message: action.payload.post,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
            }

        case 'SET-USER-PROFILE':
            return {
                ...state,
                profile: action.payload.profile
            }

        case 'SET-STATUS':
            return {
                ...state,
                status: action.payload.status
            }

        default:
            return state
    }
}

export const addPostAC = (post: string) => {
    return {
        type: 'ADD-POST',
        payload: {
            post
        }
    } as const
}

export const setUserProfileAC = (profile: ProfileType) => {
    return {
        type: 'SET-USER-PROFILE',
        payload: {
            profile
        }
    } as const
}

export const setStatusAC = (status: string) => {
    return {
        type: 'SET-STATUS',
        payload: {
            status
        }
    } as const
}


export const setUsersProfile = (userId: number) => {
    return (dispatch: Dispatch<ProfileReducersType>) => {
        profileAPI.setUsersProfile(userId)
            .then(data => {
                    dispatch(setUserProfileAC(data))
                }
            )
    }
}

export const getStatus = (userId: number) => {
    return (dispatch: Dispatch<ProfileReducersType>) => {
        profileAPI.getStatus(userId)
            .then(data => {
                    dispatch(setStatusAC(data))
                }
            )
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch<ProfileReducersType>) => {
        profileAPI.updateStatus(status)
            .then(data => {
                    if (data.resultCode === 0) {
                        dispatch(setStatusAC(status))
                    }
                }
            )
    }
}