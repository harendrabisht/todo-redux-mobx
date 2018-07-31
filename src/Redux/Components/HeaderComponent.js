import {NavLink} from 'react-router-dom';
import React, {PureComponent} from 'react';
import styles from './Header.css';

class HeaderComponent extends PureComponent {
    constructor(props) {
        super(props);
        this.logout = this
            .logout
            .bind(this);
    }
    componentDidMount() {
        this
            .props
            .initializeAuth();

    }

    logout(e) {
        e.preventDefault();
        this
            .props
            .logout();
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps !== this.props && nextProps.user.isAuth) {
            console.log('Get the todos');
            let {user} = nextProps.user;
            this
                .props
                .getTodos(user.uid)
        }
    }

    render() {
        let {user: profile} = this.props;
        let {user, isAuth} = profile;
        return (
            <div className={styles.headerCls}>
                {!isAuth
                    ? <div className={styles.linkItem}>
                            <NavLink  to="/login" activeClassName={styles.active}>
                                <i className="fas fa-user-circle"></i>
                                <span>Login</span>
                            </NavLink>
                        </div>
                    : <React.Fragment>
                        <div className={styles.linkItem}>
                            <NavLink to="/logout" activeClassName={styles.active} onClick={this.logout}>
                                <i className="fas fa-sign-out-alt"></i>
                                <span>Logout</span>
                            </NavLink>
                        </div>
                        <div className={styles.linkItem}>
                            <NavLink to="/profile" activeClassName={styles.active}>
                                <img className={styles.avatar} src={user.photoURL}/>
                                <span>{user.displayName}</span>
                            </NavLink>
                        </div>

                    </React.Fragment>}

                <div className={styles.linkItem}>
                    <NavLink exact to="/" activeClassName={styles.active}>
                        <i className="fas fa-clipboard-list"></i>
                        <span>Todos</span>
                    </NavLink>
                </div>
            </div>
        )
    }

}
export default HeaderComponent;