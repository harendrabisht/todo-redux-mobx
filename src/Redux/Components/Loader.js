import React from 'react';
import classnames from 'classnames';
export const Loader = props => {
    let {isFetching} = props;
    
    return (
        <div className={classnames("loader", isFetching?'active':'')}>
            <img className="loader-img" src="/img/loader.gif"/>
        </div>
    )
}