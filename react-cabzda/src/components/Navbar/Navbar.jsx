import React from 'react';
import Guid from './Guide/Guid';
import s from './Navbar.module.css';
import FrendsContainer from './Frends/FrendsContainer';

function Navbar(props) {
  return (
    <nav className={s.nav}>
      <Guid />
      <FrendsContainer />
    </nav>
  );
}
export default Navbar;