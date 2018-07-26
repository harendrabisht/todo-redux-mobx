import React, {Component} from 'react'
import Input from './../../Common/Input';
import styles from './../Todo.css';

export default class TodoFormComponent extends Component {
    constructor(props) {
        super(props);
        this.handleOnChange = this
            .handleOnChange
            .bind(this);
        this.submitTodoForm = this
            .submitTodoForm
            .bind(this);

        this.state = {
            todo: {
                title: '',
                done: false,
                id: null,
                isPin: false,
                date: new Date()
            }
        }
    }

    handleOnChange(e) {
        let {name, value} = e.target;
        let {todo} = this.state;
        todo[name] = value;
        todo.id = Date.now();
        this.setState({todo: todo});
    }

    submitTodoForm(e) {
        e.preventDefault();
        let {todo} = this.state
        if(todo.title.length)
            this
                .props
                .submitTodo(todo);
        todo.title = '';

        this.setState({todo: todo});
    }

    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }

    render() {
        let {title} = this.state.todo;
        return (
            <React.Fragment>
                <form className={styles.todoForm} onSubmit={this.submitTodoForm}>
                    <Input
                        type="text"
                        name="title"
                        id="title"
                        label="Title"
                        value={title}
                        placeholder="Add todo here!"
                        onChange={this.handleOnChange}/>
                </form>
            </React.Fragment>
        )
    }
}
