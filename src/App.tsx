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
import {RootStateType} from "./redux/state";

type AppPropsType = {
    state: RootStateType
    addPost:(postMessages:string)=>void
}



const App:React.FC<AppPropsType> = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navigation/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <Dialogs dialogs={props.state.dialogsPages.dialogs} messages={props.state.dialogsPages.messages}/>}/>
                    <Route path='/profile' render={() => <Profile posts={props.state.postPages.posts} addPost={props.addPost}/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
