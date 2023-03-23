import React from "react";
import s from "./Dialogs.module.css";
import {DialogsItem} from "./DialogsItem/DialogsItem";
import {Message} from "./Message/Message";
import {DialogsPagesType} from "../../redux/dialogs-reducer";
import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import {Textarea} from '../common/FormsControls/FormsControls';
import {maxLengthCreator, required} from '../../utils/validators/validators';

type DialogsType = {
    dialogsPages: DialogsPagesType
    sendMessage: (message: string) => void
}

type FormDataType = {
    newMessageBody: string
}


export const Dialogs: React.FC<DialogsType> = (props) => {
    const {
        dialogsPages,
        sendMessage
    } = props

    const dialogsElements = dialogsPages.dialogs.map(d => <DialogsItem name={d.name} id={d.id}/>)

    const messagesElements = dialogsPages.messages.map(m => <Message message={m.message}/>)

    const addNewMessage = (value: FormDataType) => {
        if (value.newMessageBody) {
            sendMessage(value.newMessageBody)
        }
    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.messageSender}>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50)


const AddMessageForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={Textarea}
                    validate={[required, maxLength50]}
                    name='newMessageBody'
                    placeholder='Enter your message'/>
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<FormDataType>({form: 'dialogAddMessageForm'})(AddMessageForm)