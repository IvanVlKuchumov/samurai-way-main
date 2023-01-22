import {combineReducers, createStore} from "redux";
import {addPostAC, profileReducer, updateNewPostAC} from "./profile-reducer";
import {dialogsReducer, sendMessageAC, updateNewMessageBodyAC} from "./dialogs-reducer";
import {DialogsPagesType} from "./dialogs-reducer";
import {PostPagesType} from "./profile-reducer";


export type DispatchType =
    ReturnType<typeof addPostAC>
    | ReturnType<typeof updateNewPostAC>
    | ReturnType<typeof updateNewMessageBodyAC>
    | ReturnType<typeof sendMessageAC>

export type RootStateType = {
    postPages: PostPagesType
    dialogsPages: DialogsPagesType
}
export type StorePropsType = {
    state: RootStateType
    onChange: () => void
    getState: () => RootStateType
    subscribe: (observer: () => void) => void
    dispatch: (action: DispatchType) => void
}

const reducers = combineReducers({
    postPages: profileReducer,
    dialogsPages: dialogsReducer,

})

export const store:StorePropsType = createStore(reducers)