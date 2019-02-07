import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';


ReactDOM.render(
    <Provider>
        <Routes />
    </Provider>, document.getElementById('root'));


