import {Dispatch} from 'redux';
import {headersAPI} from '../api/api';

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


export type AuthReducerType = ReturnType<typeof setAuthUserDataAC>


export const authReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {

    switch (action.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }

        default:
            return state
    }
}


export const setAuthUserDataAC = (userId: number, email: string, login: string) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            userId,
            email,
            login
        }
    } as const
}

export const checkAuth = () => {
    return (dispatch: Dispatch<AuthReducerType>) => {
        headersAPI.checkAuth()
            .then(
                (data) => {
                    if (data.resultCode === 0) {
                        const {id, email, login} = data.data
                        dispatch(setAuthUserDataAC(id, email, login))
                    }
                }
            )
    }

}