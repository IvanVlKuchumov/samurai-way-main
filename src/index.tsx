import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StorePropsType} from "./redux/redux-store";


const rerenderEntireTree = (store:StorePropsType) => {
    ReactDOM.render(
        <App store={store}
        />,
        document.getElementById('root')
    );

}

rerenderEntireTree(store)

store.subscribe(()=>rerenderEntireTree(store))
