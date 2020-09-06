import {createStore, applyMiddleware} from 'redux'
import ReduxLogger from 'redux-logger';
import rootReducer  from "./rootReducer";

const middleWares = [ReduxLogger];

const Store = createStore(rootReducer, applyMiddleware(...middleWares));


export default Store;