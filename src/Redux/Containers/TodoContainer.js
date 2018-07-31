import React, {PureComponent} from 'react'
import TodoFormComponent from './../Components/TodoFormComponent';

import {connect} from 'react-redux';
import TodoListComponent from './../Components/TodoListComponent';
import styles from './../Todo.css';
import {createTodos, updateTodos, deleteTodo} from './../thunkmiddleware';
import {Loader} from './../Components/Loader';
import {stat} from 'fs';
class TodoContainer extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        let {isFetching} = this.props.isFetching;
        return (
            <React.Fragment>
                <Loader isFetching={isFetching}/>
                <div className={styles.todoFormContainer}>
                    <TodoFormComponent {...this.props}></TodoFormComponent>
                </div>
                <div className={styles.todoListContainer}>
                    <TodoListComponent {...this.props}></TodoListComponent>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {todos: state.CreateTodoReducer.toDos, user: state.UserAuthentication.user, isFetching: state.isFetching};
}

const mapDispatchToProps = dispatch => {
    return {
        submitTodo: (userid, todo) => {
            dispatch(createTodos(userid, todo))
        },
        updateTodo: (userid, todo) => {
            dispatch(updateTodos(userid, todo));
        },
        deleteTodo: (userid, id) => {
            dispatch(deleteTodo(userid, id));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoContainer);
