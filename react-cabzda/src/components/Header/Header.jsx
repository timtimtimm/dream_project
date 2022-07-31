import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

function Header(props) {

    return (
        <header className= {s.header}>
            <div className={s.login}> 
            {props.auth.isAuth? 
            <div>{props.auth.login } <button onClick={props.logout}> logout</button>  </div>
            :<NavLink to='/logine'>Login</NavLink> }

            </div>
            <img src='https://mir-s3-cdn-cf.behance.net/project_modules/fs/b6c633137499061.620c5d1ac3bd0.jpg' />
        </header>
    );
}
export default Header;