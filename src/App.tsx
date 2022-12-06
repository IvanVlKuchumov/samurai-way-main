import React from 'react';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header/>
            <Technologies/>
        </div>
    );
}

const Header = () => {
    return (
        <div>
            <a href='#s'>Home</a>
            <a href='#s'>New Feed</a>
            <a href='#s'>Messages</a>
            <a href='#s'>Interesting</a>
        </div>
    )
}

const Technologies = () => {
    return (
        <div>
            <ul>
                <li>css</li>
                <li>html</li>
                <li>ts</li>
                <li>react</li>
            </ul>
        </div>
    )
}

export default App;
