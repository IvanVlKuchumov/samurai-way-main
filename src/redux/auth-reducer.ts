export type AuthType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}


const initialState: AuthType = {
    id: 1224,
    email: 'null',
    login: 'null',
    isAuth: false
}

export type AuthDataType = {
    data: AuthType
    resultCode: number
    messages: []
}



export type AuthReducerType = ReturnType<typeof setAuthUserData>


export const authReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {

    switch (action.type) {

        case 'SET_USER_DATA': {
            debugger
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        }

        default:
            return state
    }
}


export const setAuthUserData = (userId: number, email: string, login: string) => {
    debugger
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login
        }
    } as const
}