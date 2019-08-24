import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.js';
import 'bootstrap/dist/css/bootstrap.css'; 
import {BrowserRouter, Route} from 'react-router-dom';



ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter> , document.getElementById('root'));


