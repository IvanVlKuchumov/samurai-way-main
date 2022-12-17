import React from 'react';
import './App.css';
import {Header} from './components/Header/Header'
import {Navigation} from "./components/Navigation/Navigation";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";


const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navigation/>
            {/*<Profile className="app-wrapper-content"/>*/}
            <div className="app-wrapper-content">
                <Dialogs/>
            </div>
        </div>
    );
}

export default App;
