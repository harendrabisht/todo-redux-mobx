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
        let {name, checked} = e.target;
        let id = Number(name.split('-')[1]);
        this
            .props
            .updateTodo(id, checked);

    }

    deleteItem(e) {
        let {id} = e.target.dataset;
        id = Number(id);
        this
            .props
            .deleteTodo(id)
    }

    pinToTop(e, bool) {
        let {id} = e.target.dataset;
        id = Number(id);
        this
            .props
            .updateTodoPin(id, bool);
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
                name={`todo-${id}`}
                id={`todo-${id}`}
                onChange={onChange}
                className='item-cls'
                value={`todo-${id}`}
                checked={done}
                labelClass={done
                ? 'done'
                : ''}></Checkbox>
            <Popover cls="action-item">
                {isPin
                    ? 
                    <a
                        href="javascript:void(0)"
                        className="action"
                        data-id={id}
                        onClick={(e) => {
                        pinToTop(e, false)
                    }}>
                        <i className="fas fa-thumbtack"></i>
                        Unpin
                    </a>
                    : 
                    <a
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