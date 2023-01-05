import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {subscribe, addPost, RootStateType, updateNewPost} from "./redux/state";

import {state} from "./redux/state";

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
