import React from "react";
import {DialogsPagesType, sendMessageAC, updateNewMessageBodyAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";


type MapStatePropsType = {
    dialogsPages: DialogsPagesType,
    isAuth:boolean
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPages: state.dialogsPages,
        isAuth: state.auth.isAuth
    }
}


type MapDispatchPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageBodyAC(body))
        },
        sendMessage: () => {
            dispatch(sendMessageAC())
        }
    }
}
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

