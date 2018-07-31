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
                date: null,
                isPin: false
            }
        }
    }

    handleOnChange(e) {
        let {name, value} = e.target;
        let {todo} = this.state;
        todo[name] = value;
        todo.date = Date.now();
        this.setState({todo: todo});
    }

    submitTodoForm(e) {
        e.preventDefault();
        let {todo} = this.state;
        let{history} = this.props;
        let {uid} = this.props.user;
        if(!uid){
            history.push('/login');
            return;
        }
        if(todo.title.length)
            this
                .props
                .submitTodo(uid, todo);
        todo.title = '';

        this.setState({todo: todo});
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
