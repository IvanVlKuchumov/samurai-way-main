import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, RootStateType} from "./redux/state";


const rerenderEntireTree = (state:RootStateType) => {
    ReactDOM.render(
        <App state={state}
             dispatch={store.dispatch.bind(store)}
        />,
        document.getElementById('root')
    );

}

rerenderEntireTree(store.getState())

store.subscribe(()=>rerenderEntireTree(store.getState()))
