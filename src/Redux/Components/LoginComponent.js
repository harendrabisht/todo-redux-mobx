import React, {PureComponent} from 'react'
import {Button} from './../../Common/Button';
import classnames from 'classnames';
import styles from './../Login.css';
import {Redirect} from 'react-router-dom';
import {fire, facebookProvider, googleProvider, githubProvider} from './../firebase';

export default class LoginComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.facebookLogin = this
            .facebookLogin
            .bind(this);
        this.googleLogin = this
            .googleLogin
            .bind(this);
        this.githubLogin = this
            .githubLogin
            .bind(this);
        this.state = {
            authenticated: false
        }

    }
    facebookLogin() {
        this
            .props
            .authFacebook();
    }

    googleLogin() {
        this
            .props
            .authGoogle();
    }
    componentWillReceiveProps(nextProps) {
        console.log(nextProps);
    }
    githubLogin() {
        fire
            .auth()
            .signInWithPopup(githubProvider)
            .then((result, error) => {
                if (error) {
                    console.log('unable to signup with firebase')
                } else {
                    this.setState({authenticated: true})
                }
            })
    }

    render() {
        let {isAuth} = this.props;
        let profileUrl = {pathname:'/profile'}
        if (isAuth) {
            return <Redirect to={profileUrl}/>;
        }
        return (
            <div className={classnames(styles.loginContainer)}>
                <h2 className={styles.loginHeader}>Sign in with
                </h2>
                <Button className="facebook" onClick={this.facebookLogin}>
                    <i className="fab fa-facebook-f"></i>
                    &nbsp;&nbsp; Login with facebook</Button>
                <Button className="google" onClick={this.googleLogin}>
                    <i className="fab fa-google"></i>
                    &nbsp;&nbsp; Login with Google</Button>
                <Button className="github" onClick={this.githubLogin}>
                    <i className="fab fa-github-alt"></i>
                    &nbsp;&nbsp; Login with Github</Button>
            </div>
        )
    }
}
