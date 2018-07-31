import React, {PureComponent} from 'react';

import HeaderComponent from './../Components/HeaderComponent';
import {connect} from 'react-redux';
import {initializeAuthorization, logout, getTodos} from './../thunkmiddleware';
class Header extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <HeaderComponent {...this.props}></HeaderComponent>
        )
    }

}

const mapStateToProps = store =>({
    user: store.UserAuthentication
});
const mapStateToDispatch= dispatch =>{
    return{
        initializeAuth: () => {
            dispatch(initializeAuthorization());
        },
        getTodos: userid=>{
            dispatch(getTodos(userid));
        },
        logout:()=>{
            dispatch(logout());
        }
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Header);