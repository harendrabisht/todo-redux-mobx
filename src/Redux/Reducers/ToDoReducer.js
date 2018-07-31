import {Constants} from './../Constant';
let initialState = {
    toDos: []
}
export const CreateTodoReducer = (state = initialState, action) => {
    let {toDos} = state;
    switch (action.type) {
        case Constants.GET_TODO_SUCCESS:
            let data = action.data;
            let todoCollection = [];
            Object
                .keys(data)
                .forEach(element => {
                    let todo = data[element];
                    todo.id = element;
                    todoCollection = todoCollection.concat(todo);
                });
            return Object.assign({}, state, {toDos: todoCollection});
            
        case Constants.ADD_TODO:
            let {title, id, done, isPin} = action.data;
            return Object.assign({}, state, {
                toDos: [
                    ...state.toDos, {
                        title,
                        id,

                        isPin,
                        done
                    }
                ]
            });

        default:
            return initialState;
    }
}

let loaderState = {
    isFetching: false
};

export const isFetching = (state = loaderState, action) => {
    switch (action.type) {
        case Constants.IS_FETCH:
            return Object.assign({}, state, {isFetching: action.data});
        default:
            return loaderState;
    }
}