import '../css/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {Router, browserHistory} from 'react-router';
import promise from 'redux-promise';

import allReducers from './reducers';
import routes from './routes';

 // const store = createStore(allReducers, applyMiddleware(promise));
const store = applyMiddleware(promise)(createStore)(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Router
      history={browserHistory}
      routes={routes}
    />
  </Provider>,
  document.getElementById('root')
);