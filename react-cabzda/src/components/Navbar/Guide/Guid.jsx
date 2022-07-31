import React from 'react';
import s from './Guid.module.css';
import { NavLink } from 'react-router-dom';

const setActive = ({isActive})=> isActive ? s.active : '';
function Guid() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink  to='/Profile' className={setActive}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to='/News' className={setActive}>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Dialogs' className={setActive}>Messages</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Music' className={setActive}>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/Setting' className={setActive}>Setting</NavLink>
      </div>
      <div className={s.item}>
        <NavLink  to='/Users' className={setActive}>Users</NavLink>
      </div>
    </nav>
  );
}
export default Guid;