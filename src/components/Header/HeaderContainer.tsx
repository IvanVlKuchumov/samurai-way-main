import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {checkAuth, logout} from '../../redux/auth-reducer';
import {Dispatch} from 'redux';


export type MapStatePropsType = {
    isAuth: boolean
    login: string | null
}


export type MapDispatchPropsType = {
    setAuthUserData: () => void
    logout: () => void
}


class HeaderAPIComponent extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.setAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login} logout={this.props.logout}/>;
    }
}

const mapStateToProps = (state: AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})


const mapDispatchToProps = (dispatch: Dispatch): MapDispatchPropsType => {
    return {
        setAuthUserData: () => {
            checkAuth()(dispatch)
        },
        logout: () => {
            logout()(dispatch)
        }
    }
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)