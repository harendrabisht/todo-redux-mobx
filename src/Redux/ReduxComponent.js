import React, {PureComponent} from 'react';
import store from './Store'
import {Provider, connect} from 'react-redux'
import TodoContainer from './Containers/TodoContainer'
import styles from './Todo.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Containers/Login';
import Header from './Containers/Header';
import Profile from './Containers/Profile';

class ReduxComponent extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className={styles.container}>
                        <div className={styles.todoContainer}>
                            <Header/>
                            <Route exact path="/" component={TodoContainer}></Route>
                            <Route path="/login" component={Login}></Route>
                            <Route path="/profile" component={Profile}></Route>
                        </div>
                    </div>
                </Router>
                
            </Provider>
        )
    }
}

export default ReduxComponent;