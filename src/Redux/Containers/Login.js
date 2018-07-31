import React, {Component} from 'react'
import {connect} from 'react-redux';
import LoginComponent from './../Components/LoginComponent';
import styles from './../Login.css';
import {SetupGithubLogin, SetupGoogleLogin, SetupFacebookLogin} from './../thunkmiddleware';

import classnames from 'classnames';

class Login extends Component {
    render() {
        return (
            <div className={classnames(styles.login)}>
                <LoginComponent {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = user => ({user: user.UserAuthentication.user, isAuth: user.UserAuthentication.isAuth});

const mapDispatchToProps = dispatch => {
    return {
        authFacebook: () => {
            dispatch(SetupFacebookLogin());
        },
        authGoogle: () => {
            dispatch(SetupGoogleLogin());
        },
        authGithub: () => {
            dispatch(SetupGithubLogin());
        }
    }
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);