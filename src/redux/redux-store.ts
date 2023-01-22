import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {DialogsPagesType} from "./dialogs-reducer";
import {PostPagesType} from "./profile-reducer";

export type RootStateType = {
    postPages: PostPagesType
    dialogsPages: DialogsPagesType
}


const reducers = combineReducers({
    postPages: profileReducer,
    dialogsPages: dialogsReducer,

})

export const store = createStore(reducers)