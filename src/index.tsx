import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, RootStateType} from "./redux/state";


const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state}
             addPost={addPost}
             updateNewPost={updateNewPost}
        />,
        document.getElementById('root')
    );

}

rerenderEntireTree(state)

subscribe(rerenderEntireTree)
