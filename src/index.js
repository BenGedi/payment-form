import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css'; 
import './index.css';
import App from './App';
import { Provider } from 'mobx-react';
import { BrowserRouter as Router } from 'react-router-dom';
import {store} from './models/store';

const router = (
    <Provider store={store}>
        <Router>
            <App/>
        </Router>
    </Provider>
)

ReactDOM.render(router, document.getElementById('root'));

