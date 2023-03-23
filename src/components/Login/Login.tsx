import {Field, InjectedFormProps, reduxForm} from 'redux-form';
import React, {FC} from 'react';
import {Input} from '../common/FormsControls/FormsControls';
import {required} from '../../utils/validators/validators';
import {connect} from 'react-redux';
import {login} from '../../redux/auth-reducer';
import {AppDispatch, AppStateType} from '../../redux/redux-store';
import {Redirect} from 'react-router-dom';
import s from '../common/FormsControls/FormControls.module.css'

type FormDataType = {
    email: string
    password: string
    rememberMe: boolean
}

type MapDispatchPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void
}

type MapStatePropsType = {
    isAuth: boolean
}


export const Login: FC<MapStatePropsType & MapDispatchPropsType> = ({login, isAuth}) => {
    const onSubmit = (formData: FormDataType) => {
        login(formData.email, formData.password, formData.rememberMe)
    }

    if (isAuth) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
};

const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={'Email'} name={'email'} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder="Password" name={'password'} type={'password'} component={Input}
                           validate={[required]}/>
                </div>
                <div>
                    <Field component={'input'} name={'rememberMe'} type={'checkbox'}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
            {props.error &&
                <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
        </div>
    );
};

const LoginReduxForm = reduxForm<FormDataType>({form: 'login'})(LoginForm)

const mapDispatchToProps = (dispatch: AppDispatch): MapDispatchPropsType => {
    return {
        login: (email: string, password: string, rememberMe: boolean = false) => {
            dispatch(login(email, password, rememberMe))
        }
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login)

