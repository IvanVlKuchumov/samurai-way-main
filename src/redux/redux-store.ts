import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducersType} from "./profile-reducer";
import {dialogsReducer, DialogsReducersType} from "./dialogs-reducer";
import {usersReducer, UsersReducersType} from "./users-reducer";
import {authReducer, AuthReducerType} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppReducersType =
    UsersReducersType
    | AuthReducerType
    | DialogsReducersType
    | ProfileReducersType

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppReducersType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducersType>
export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store