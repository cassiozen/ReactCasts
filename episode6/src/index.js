import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App'
import reducer from './reducers'
import './index.css';

const loggerMiddleware = store => next => action => {
  console.log('dispatching: ', action);
  next(action);
}

const confirmationMiddleware = store => next => action => {
  if(action.shouldConfirm){
    if(confirm('Are you sure?')){
      next(action);
    }
  } else {
    next(action);
  }
}

const promiseMiddleware = store => next => action => {
  if(action.promise){
    action.promise
    .then(rawResponse => rawResponse.json())
    .then(response => store.dispatch({type: action.type, payload: response}));
  } else {
    next(action);
  }
}

const store = createStore(
  reducer,
  applyMiddleware(loggerMiddleware, confirmationMiddleware, promiseMiddleware)
);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
