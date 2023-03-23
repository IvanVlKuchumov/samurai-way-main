import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {AppDispatch} from './redux-store';
import {stopSubmit} from 'redux-form';

export type AuthType = {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}


const initialState: AuthType = {
    id: 0,
    email: 'null',
    login: 'null',
    isAuth: false
}


export type AuthReducerType =
    ReturnType<typeof setAuthUserDataAC>


export const authReducer = (state: AuthType = initialState, action: AuthReducerType): AuthType => {

    switch (action.type) {

        case 'SET_USER_DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: action.payload.isAuth
            }

        default:
            return state
    }
}


export const setAuthUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: 'SET_USER_DATA',
        payload: {
            id,
            email,
            login,
            isAuth
        }
    } as const
}

export const checkAuth = () => {
    return (dispatch: Dispatch<AuthReducerType>) => {
        authAPI.checkAuth()
            .then(
                (data) => {
                    if (data.resultCode === 0) {
                        const {id, email, login} = data.data
                        dispatch(setAuthUserDataAC(id, email, login, true))
                    }
                }
            )
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return (dispatch: any ) => {
        authAPI.login(email, password, rememberMe)
            .then(
                (data) => {
                    if (data.resultCode === 0) {
                        dispatch(checkAuth())
                    } else {
                        const message = data.messages.length > 0 ? data.messages : 'Some error'
                        dispatch( stopSubmit('login', {_error: message}))
                    }
                }
            )
    }
}

export const logout = () => {
    return (dispatch: AppDispatch) => {
        authAPI.logout()
            .then(
                (data) => {
                    if (data.resultCode === 0) {
                        dispatch(setAuthUserDataAC(null, null, null, false))
                    }
                }
            )
    }
}


