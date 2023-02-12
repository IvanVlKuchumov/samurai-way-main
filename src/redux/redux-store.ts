import {combineReducers, createStore} from "redux";
import { profileReducer, ProfileReducersType} from "./profile-reducer";
import {dialogsReducer, DialogsReducersType} from "./dialogs-reducer";
import {DialogsPagesType} from "./dialogs-reducer";
import {ProfilePagesType} from "./profile-reducer";
import {usersReducer, UsersReducersType} from "./users-reducer";


export type DispatchType =
    ProfileReducersType
    | DialogsReducersType
    | UsersReducersType

export type RootStateType = {
    profilePages: ProfilePagesType
    dialogsPages: DialogsPagesType
}
export type StorePropsType = {
    state: RootStateType
    onChange: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: DispatchType) => void
}

export type PhotoType ={
    small:string
    large:string
}

const rootReducer = combineReducers({
    profilePages: profileReducer,
    dialogsPages: dialogsReducer,
    usersPages: usersReducer

})

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store