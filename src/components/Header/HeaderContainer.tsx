import React from 'react';
import {Header} from './Header';
import axios, {AxiosResponse} from 'axios';
import {connect} from 'react-redux';
import {AppStateType} from '../../redux/redux-store';
import {setAuthUserData} from '../../redux/auth-reducer';
import {AuthDataType} from '../../redux/auth-reducer';


export type MapStatePropsType = {
    isAuth: boolean
    login: string
}


export type MapDispatchPropsType ={
    setAuthUserData: (userId: number, email: string, login: string) => void
}


 class HeaderAPIComponent extends React.Component<MapStatePropsType & MapDispatchPropsType> {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
            withCredentials: true
        })
            .then((response:AxiosResponse<AuthDataType>) => {
                if (response.data.resultCode === 0) {
                    const {id, email, login} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header isAuth={this.props.isAuth} login={this.props.login}/>;
    }
}

const mapStateToProps = (state:AppStateType) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

/*
const mapDispatchToProps = () => {
  return {

  }
}
*/


export const HeaderContainer = connect(mapStateToProps, {setAuthUserData}) (HeaderAPIComponent)