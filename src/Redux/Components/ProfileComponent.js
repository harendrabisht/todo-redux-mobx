import React from 'react';
import styles from './Profile.css';
import {Redirect} from 'react-router-dom';
export const ProfileComponent = props => {
    let {user, isAuth} = props;

    let {displayName, photoURL, email} = user ? user: {};

    console.log(props);
    if (!isAuth) {
        let loginUrl = {
            pathname: '/login'
        }
        return <Redirect to={loginUrl}/>;
    }
    return (
        <div className={styles.profileContainer}>
            {displayName
                ? <React.Fragment>
                    <div className={styles.avatar}>
                        <figure>
                            <img src={photoURL}/>
                        </figure>
                    </div>

                    <div className={styles.display}>
                        <strong>{displayName}</strong>
                    </div>
                </React.Fragment>
                : ''}

        </div>
    )
}