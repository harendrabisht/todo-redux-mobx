import React from 'react';
import styles from './form.css';
import classnames from 'classnames';
export const Button = (props)=>{
    let {btnText, className, children, onClick} = props;

    return(
        <button className={classnames(styles.btn, className)} onClick={onClick}>{children}</button>
    )
}
