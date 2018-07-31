import React, {PureComponent} from 'react'
import styles from './../Todo.css';
import Checkbox from './../../Common/Checkbox';
import Popover from './../../Common/Popover'
import classnames from 'classnames';

export default class TodoListComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.onChangeToDo = this
            .onChangeToDo
            .bind(this);
        this.deleteItem = this
            .deleteItem
            .bind(this);
        this.pinToTop = this
            .pinToTop
            .bind(this);
    }

    onChangeToDo(e) {
        let {checked, id} = e.target;
        let {todos, user} = this.props;
        let todo = todos.filter(todos => {
            if (todos.id === id) 
                return true;
            }
        )[0];
        todo.done = checked;
        this
            .props
            .updateTodo(user.uid, todo);

    }

    deleteItem(e) {
        let {id} = e.target.dataset;
        let {user} = this.props;
        this
            .props
            .deleteTodo(user.uid, id)
    }

    pinToTop(e, bool) {
        let {id} = e.target.dataset;
        let {todos, user} = this.props;
        let todo = todos.filter(todos => {
            if (todos.id === id) 
                return true;
            }
        )[0];
        todo.isPin = bool;
        this
            .props
            .updateTodo(user.uid, todo);
    }

    render() {
        let {todos} = this.props;
        let unPinTodos = todos.filter(todo => {
            return !todo.isPin && todo
        });
        let pinTodos = todos.filter(todo => {
            return todo.isPin && todo
        });
        const unPinTodo = unPinTodos.map((todo, i) => (
            <React.Fragment key={i}>
                <TodoItem
                    {...todo}
                    onChange={this.onChangeToDo}
                    deleteItem={this.deleteItem}
                    pinToTop={this.pinToTop}></TodoItem>
            </React.Fragment>
        ));
        const pinTodo = pinTodos.map((todo, i) => (
            <React.Fragment key={i}>
                <TodoItem
                    {...todo}
                    onChange={this.onChangeToDo}
                    deleteItem={this.deleteItem}
                    pinToTop={this.pinToTop}></TodoItem>
            </React.Fragment>
        ));
        return (
            <React.Fragment>
                {pinTodo.length
                    ? <div className={classnames(styles.pinned)}>
                            {pinTodo}
                        </div>
                    : ''}
                {unPinTodo.length
                    ? <div className={classnames(styles.unpinned)}>
                            {unPinTodo}
                        </div>
                    : ''}

            </React.Fragment>
        )
    }
}

const TodoItem = (props) => {
    let {
        title,
        onChange,
        done,
        isPin,
        id,
        pinToTop,
        deleteItem
    } = props;

    return (
        <div className={styles.listItem}>
            {isPin
                ? <i className="fas fa-thumbtack"></i>
                : ''}
            <Checkbox
                label={title}
                name={id}
                id={id}
                onChange={onChange}
                className='item-cls'
                value={id}
                checked={done}
                labelClass={done
                ? 'done'
                : ''}></Checkbox>
            <Popover cls="action-item">
                {isPin
                    ? <a
                            href="javascript:void(0)"
                            className="action"
                            data-id={id}
                            onClick={(e) => {
                            pinToTop(e, false)
                        }}>
                            <i className="fas fa-thumbtack"></i>
                            Unpin
                        </a>
                    : <a
                        href="javascript:void(0)"
                        className="action"
                        data-id={id}
                        onClick={(e) => {
                        pinToTop(e, true)
                    }}>
                        <i className="fas fa-thumbtack"></i>
                        Pin to top</a>}

                <a
                    href="javascript:void(0)"
                    className="action"
                    data-id={id}
                    onClick={deleteItem}>
                    <i className="fas fa-trash-alt"></i>
                    Delete</a>
            </Popover>
        </div>
    )
}