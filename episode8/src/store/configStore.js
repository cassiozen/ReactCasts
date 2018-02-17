import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';
import createHistory from 'history/createBrowserHistory';
import reducer from '../reducers';


export const history = createHistory()

const initialState = {}
const enhancers = []
const middleware = [
  thunk,
  routerMiddleware(history)
]

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(initialState) {
    return createStore(
        reducer,
        initialState,
        composeEnhancers(
            applyMiddleware(createLogger(), ...middleware),
            ...enhancers
        )
    );
}