import React from 'react';
import {Header} from './Header';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {checkAuth} from '../../redux/auth-reducer';
import {Dispatch} from 'redux';


export type MapStatePropsType = {
    isAuth: boolean
    login: string
}


export type MapDispatchPropsType = {
    setAuthUserData: () => void
}


class HeaderAPIComponent extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        this.props.setAuthUserData()
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
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
        }
    }
}


export const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderAPIComponent)