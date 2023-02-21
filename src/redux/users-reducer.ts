export type UsersPagesType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    followingInProgress: boolean
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

export type PhotoType ={
    small:string
    large:string
}

export type UsersReducersType =
    ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof toggleFollowingProgress>


const initialState: UsersPagesType = {
    users: [],
    totalUsersCount: 0,
    pageSize: 15,
    currentPage: 1,
    isFetching: false,
    followingInProgress: false
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

        case 'TOGGLE-IS-FOLLOWING-IN-PROGRESS':
            return {...state, followingInProgress: action.payload.followingInProgress}

        default:
            return state
    }
}

export const follow = (userID: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userID
        }
    } as const
}

export const unFollow = (userID: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userID
        }
    } as const
}

export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET-USERS',
        payload: {
            users
        }
    } as const
}

export const setCurrentPage = (page: number) => {
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

export const toggleIsFetching = (isFetching:boolean) => {
    return {
        type: 'TOGGLE-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingProgress = (followingInProgress:boolean) => {
    return {
        type: 'TOGGLE-IS-FOLLOWING-IN-PROGRESS',
        payload: {
            followingInProgress
        }
    } as const
}

