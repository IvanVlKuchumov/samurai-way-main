export type UsersPagesType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
}

export type LocationType = {
    country: string
    city: string
}

export type PhotoType ={
    small:string
    large:string
}


export type UserType = {
    id: number
    name: string
    followed: boolean
    status: string
    photos: PhotoType
    location: LocationType
}

export type UsersReducersType =
    ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalUsersCount>


const initialState: UsersPagesType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 15,
    currentPage: 1
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

export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: 'SET-TOTAL-USERS-COUNT',
        payload: {
            totalCount
        }
    } as const
}


