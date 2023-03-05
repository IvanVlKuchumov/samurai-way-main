import {Dispatch} from 'redux';
import {usersAPI} from '../api/api';

export type UsersPagesType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
}

export type LocationType = {
    country: string
    city: string
}


export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string
    photos: PhotoType
    location: LocationType
}

export type PhotoType = {
    small: string
    large: string
}

export type UsersReducersType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCountAC>
    | ReturnType<typeof toggleIsFetchingAC>
    | ReturnType<typeof toggleFollowingProgressAC>


const initialState: UsersPagesType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}


export const usersReducer = (state = initialState, action: UsersReducersType): UsersPagesType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users: action.payload.users}

        case 'SET-CURRENT-PAGE':
            return {...state, currentPage: action.payload.page}

        case 'SET-TOTAL-USERS-COUNT':
            return {...state, totalUsersCount: action.payload.totalCount}

        case 'TOGGLE-IS-FETCHING':
            return {...state, isFetching: action.payload.isFetching}

        case 'TOGGLE-IS-FOLLOWING-PROGRESS':
            return {
                ...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }

        default:
            return state
    }
}

export const followAC = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}

export const unFollowAC = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPageAC = (page: number) => {
    return {
        type: 'SET-CURRENT-PAGE',
        payload: {
            page
        }
    } as const
}

export const setTotalUsersCountAC = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount
        }
    } as const
}

export const toggleIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingProgressAC = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}


export const getUsers = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch<UsersReducersType>) => {
        dispatch(toggleIsFetchingAC(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetchingAC(false))
                dispatch(setUsersAC(data.items))
                dispatch(setTotalUsersCountAC(data.totalCount))
            })
    }
}

export const follow = (userId: number) => {
    return (dispatch: Dispatch<UsersReducersType>) => {
        dispatch(toggleFollowingProgressAC(true, userId))
        usersAPI.followUser(userId)
            .then(data => {
                if (data.resultCode === 0) {
                   dispatch(followAC(userId))
                }
                dispatch(toggleFollowingProgressAC(false, userId))
            })
    }
}

