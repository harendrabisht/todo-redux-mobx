import React, {PureComponent} from 'react'
import TodoFormComponent from './../Components/TodoFormComponent';
import {CreateTodo, updateTodoStatus, updateTodoPin, deleteTodo} from './../Actions/ToDoAction';
import {connect} from 'react-redux';
import TodoListComponent from './../Components/TodoListComponent';
import styles from './../Todo.css';

class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className={styles.container}>
                <div className={styles.todoContainer}>
                    <div className={styles.todoFormContainer}>
                        <TodoFormComponent {...this.props}></TodoFormComponent>
                    </div>
                    <div className={styles.todoListContainer}>
                        <TodoListComponent {...this.props}></TodoListComponent>
                    </div>
                </div>

            </div>
        )
    }
}

const mapStateToProps = state => ({todos: state.toDos});

const mapDispatchToProps = dispatch => {
    return {
        submitTodo: (todo) => {
            dispatch(CreateTodo(todo))
        },
        updateTodo: (id, done) => {
            dispatch(updateTodoStatus(id, done));
        },
        updateTodoPin: (id, isPin) => {
            dispatch(updateTodoPin(id, isPin));
        },

        deleteTodo: id => {
            dispatch(deleteTodo(id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
