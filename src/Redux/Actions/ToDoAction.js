import {Constants} from './../Constant';
export const CreateTodo = (data)=>({
    type: Constants.ADD_TODO,
    data
});

export const getTodoSuccess = data=>({
    type: Constants.GET_TODO_SUCCESS,
    data
});

export const getTodoError = data=>({
    type: Constants.GET_TODO_ERROR,
    data
});

export const updateTodoStatus = (id, done) =>({
    type: Constants.CHANGE_STATUS,
    data:{
        id,
        done
    }
});
export const updateTodoPin = (id, isPin) =>({
    type: Constants.CHANGE_IS_PIN,
    data:{
        id,
        isPin
    }
});

export const deleteTodo = id =>({
    type: Constants.DELETE_TODO,
    id
});

export const fetchRequest = data =>({
    type: Constants.IS_FETCH,
    data
})