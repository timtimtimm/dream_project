import React from 'react';
import s from './Users.module.css';
import Preloader from '../../support/preloader/Preloader';
import Paginator from '../../support/Paginator/Paginator.jsx';
import User from './User/User';

let Users = (props) => {

    return <>
        <div className={props.preloader ? '' : s.visible}>
            <Preloader />
        </div>
        <div>
            <Paginator {...props} />
        </div>
        <div className = {s.padre}>
            {
                props.users.map(user => {
                    return <User user = {user} {...props} />
                })
            }
        </div>
    </>
}

export default Users;