import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import inject from 'svg-injector';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import reducer from 'shared/reducers/index.js';

import {
  App
} from '../shared/components';

const state = window.__INITIAL_STATE__ || {};

const redux = createStore(reducer, state, applyMiddleware(thunk));

window.redux = redux;

async function populate(){
    return await ReactDOM.hydrate(
        <BrowserRouter forceRefresh={!state.supportsHistory}>
            <Provider store={redux}>
                <App
                    state={{
                        ...state,
                        ...redux
                    }}
                />
            </Provider>
        </BrowserRouter>,
        document.getElementById('starcharts')
    );
}

populate();

var mySVGsToInject = document.querySelectorAll('img.to-svg');

// Do the injection
inject(mySVGsToInject);
