export type UsersPagesType = {
    users: Array<UserType>
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


const initialState: UsersPagesType = {
    users: [
        // {
//     id: 1,
//         fullName: 'Ivan',
//     followed: true,
//     status: 'it\'s crazy to be the first',
//     location: {
//     country: 'Russia',
//         city: 'Yaroslavl'
// },
//     avatarUrl: 'https://rg.ru/uploads/images/gallery/84f24d10/18_401ada8a.jpg'
// },
// {
//     id: 2,
//         fullName: 'Borat',
//     followed: true,
//     status: 'just do it',
//     location: {
//     country: 'Russia',
//         city: 'Moscow'
// },
//     avatarUrl: 'https://rg.ru/uploads/images/gallery/84f24d10/18_401ada8a.jpg'
// },
// {
//     id: 3,
//         fullName: 'John',
//     followed: false,
//     status: 'lya-lya-lya',
//     location: {
//     country: 'UA',
//         city: 'London'
// },
//     avatarUrl: 'https://rg.ru/uploads/images/gallery/84f24d10/18_401ada8a.jpg'
// }
    ]
}



export const usersReducer = (state = initialState, action: UsersReducersType): UsersPagesType => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: true} : u)}

        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userID ? {...u, followed: false} : u)}

        case 'SET-USERS':
            return {...state, users: [...state.users, ...action.payload.users]}

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


