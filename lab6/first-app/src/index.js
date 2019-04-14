import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// ReactDOM.render(<App />, document.getElementById('root'));
function Message() {
    return <h2 className="App-logo">Witaj Janusz!</h2>;
};

ReactDOM.render(<Message />, document.getElementById('root'));

