import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer, ProfileReducersType} from "./profile-reducer";
import {dialogsReducer, DialogsReducersType} from "./dialogs-reducer";
import {usersReducer, UsersReducersType} from "./users-reducer";
import {authReducer, AuthReducerType} from './auth-reducer';
import thunk, {ThunkAction, ThunkDispatch} from 'redux-thunk';


const rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer,
    auth: authReducer,

})

export type AppReducersType =
    UsersReducersType
    | AuthReducerType
    | DialogsReducersType
    | ProfileReducersType

export type AppStateType = ReturnType<typeof rootReducer>
export type AppDispatch = ThunkDispatch<AppStateType, unknown, AppReducersType>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, AppStateType, unknown, AppReducersType>

export const store = createStore(rootReducer, applyMiddleware(thunk))

// @ts-ignore
window.store = store