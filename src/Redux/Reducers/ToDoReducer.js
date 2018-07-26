import {Constants} from './../Constant';
let initialState = {
    toDos: []
}
export const CreateTodoReducer = (state = initialState, action) => {
    let {toDos} = state;
    switch (action.type) {
        case Constants.ADD_TODO:
            let {title, id, date, done, isPin} = action.data;
            return Object.assign({}, state, {
                toDos: [
                    ...state.toDos, {
                        title,
                        id,
                        date,
                        isPin,
                        done
                    }
                ]
            });

        case Constants.CHANGE_STATUS:

            toDos = toDos.map(todo => {
                if (todo.id === action.data.id) {
                    todo.done = action.data.done;
                }
                return todo;
            });
            return Object.assign({}, state, {toDos: toDos});

        case Constants.CHANGE_IS_PIN:

            toDos = toDos.map(todo => {
                if (todo.id === action.data.id) {
                    todo.isPin = action.data.isPin;
                }
                return todo;
            });
            return Object.assign({}, state, {toDos: toDos});

        case Constants.DELETE_TODO:
            toDos = toDos.filter(todo => {
                if (todo.id !== action.id)
                    return todo;
            });
            return Object.assign({}, state, {toDos: toDos});

        default:
            return state;
    }
}
