import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const posts = [
    {id:1, message:'Hello, my friend!', likesCount:1},
    {id:2, message:'The boy went to success, no luck.', likesCount:0},
    {id:3, message:'Chocolate is not to blame', likesCount:100500}
]

const dialogs  = [
    {id: 1, name:'Biba'},
    {id: 2, name:'Boba'},
    {id: 3, name:'Buba'}
]

const messages = [
    {id:1, message:"Hello world!"},
    {id:2, message:"What's up?"},
    {id:3, message:"Good morning!"}
]


ReactDOM.render(
    <App posts={posts} dialogs={dialogs} messages={messages}/>,
  document.getElementById('root')
);