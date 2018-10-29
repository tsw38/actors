import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import * as AllActions from '../shared/actions';
import inject from 'svg-injector';

import {
  App
} from '../shared/components';

const state    = (window) ? window.__INITIAL_STATE__ : {};
state.supportsHistory = 'pushState' in window.history;
state.canUseStorage = (global.window && !!localStorage);

async function populate(){
  return await ReactDOM.hydrate(
    <BrowserRouter forceRefresh={!state.supportsHistory}>
      <App
        state={state}
        actions={AllActions}
      />
    </BrowserRouter>,
    document.getElementById('starcharts')
  );
}

populate();

var mySVGsToInject = document.querySelectorAll('img.to-svg');

// Do the injection
inject(mySVGsToInject);
