import { createStore, compose, applyMiddleware } from 'redux';  // 这里是没有./
import thunk from 'redux-thunk';
import reducer from './reducer'; 

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(thunk)
));

export default store; 