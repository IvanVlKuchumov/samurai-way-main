import React, {ComponentType} from "react";
import {DialogsPagesType, sendMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from '../../hoc/WithAuthRedirect';


type MapStatePropsType = {
    dialogsPages: DialogsPagesType,
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        dialogsPages: state.dialogsPages,
    }
}


type MapDispatchPropsType = {
    sendMessage: (message: string) => void
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        sendMessage: (message) => {
            dispatch(sendMessageAC(message))
        }
    }
}
export const DialogsContainer = compose<ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect
)(Dialogs)

