import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {store, StorePropsType} from "./redux/redux-store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {AnyAction, Store} from "redux";


const rerenderEntireTree = (store: Store<StorePropsType>) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root')
    );

}

rerenderEntireTree(store)

store.subscribe(() => rerenderEntireTree(store))
