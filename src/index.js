import React from 'react';
import reactDOM from 'react-dom';

import App from './components/App';
//import { Provider } from 'react-redux';
//import { createStore, combineReducers } from 'redux';

//const reducers = combineReducers({ reducer: null });

reactDOM.render(
    //  <Provider store={createStore(reducers)}>
    <App />
    //</Provider >
    , document.querySelector("#root")
);