import {combineReducers} from 'redux'
import {CreateTodoReducer, isFetching} from './Reducers/ToDoReducer';
import {UserAuthentication} from './Reducers/UserReducer';

export default combineReducers({
    CreateTodoReducer,
    UserAuthentication,
    isFetching
});