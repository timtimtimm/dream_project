import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {
    let path = '/Dialogs/' + props.id;
    return (
        <div className={s.user}>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvTAygUqEikPb3lsdXK7YjtynWqZVoMToD3g&usqp=CAU' />
            <NavLink to={path} > {props.name} </NavLink>
        </div>
    );
}



export default User;