import React from 'react';
import ReactDOM from 'react-dom';
import Store from './Store';
import App from './App';
import { Provider } from 'react-redux';


ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <App/>
        </Provider>
    </React.StrictMode>
    
    ,
    document.getElementById('root')
    );