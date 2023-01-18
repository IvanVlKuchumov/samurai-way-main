import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Settings} from "./components/Settings/Settings";
import {DispatchType, RootStateType} from "./redux/state";

type AppPropsType = {
    state:RootStateType
    dispatch: (action: DispatchType) => void
}


const App: React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogsPages={props.state.dialogsPages}/>}/>
                    <Route path='/profile'
                           render={() => <Profile postPages={props.state.postPages} dispatch={props.dispatch}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
