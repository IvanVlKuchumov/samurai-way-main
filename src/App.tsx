import React from 'react';
import './App.css';
import {Navigation} from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import {HeaderContainer} from './components/Header/HeaderContainer';
import {LoginContainer} from './components/Login/Login';


const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <Navigation/>
            <div className="app-wrapper-content">
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/login' render={() => <LoginContainer/>}/>
            </div>
        </div>

    );
}

export default App;
