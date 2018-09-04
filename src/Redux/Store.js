import {createStore, applyMiddleware} from 'redux';
import {thunkMiddleware} from 'redux-thunk';
import reducers from './Reducer';
const middleWare = applyMiddleware(thunkMiddleware)(createStore);
const store = middleWare(reducers);
export default store;
