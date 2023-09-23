import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
        <li><NavLink to="/snack/1" activeClassName="active">Snack 1</NavLink></li>
        <li><NavLink to="/snack/2" activeClassName="active">Snack 2</NavLink></li>
        <li><NavLink to="/snack/3" activeClassName="active">Snack 3</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;