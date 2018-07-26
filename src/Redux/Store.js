import {createStore} from 'redux';
import {CreateTodoReducer} from './Reducers/ToDoReducer';

const TodoStore = createStore(CreateTodoReducer);
export default TodoStore;
