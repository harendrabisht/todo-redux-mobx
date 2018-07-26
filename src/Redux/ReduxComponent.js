import React, {PureComponent} from 'react';
import TodoStore from './Store'
import {Provider} from 'react-redux'
import TodoContainer from './Containers/TodoContainer'
class ReduxComponent extends PureComponent {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <Provider store={TodoStore}>
                <TodoContainer></TodoContainer>
            </Provider>
        )
    }
}
export default ReduxComponent;