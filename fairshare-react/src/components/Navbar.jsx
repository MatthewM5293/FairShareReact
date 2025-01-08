import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
return (
    <nav className="navbar">
    <h1>Fairshare (TBD)</h1>
    <ul>
        <li>
        <Link to="/">Dashboard</Link>
        </li>
        <li>
        <Link to="/expenses">Expenses</Link>
        </li>
        <li>
        <Link to="/budget">Budget</Link>
        </li>
        <li>
        <Link to="/stocks">Stocks</Link>
        </li>
    </ul>
    </nav>
);
};

export default Navbar;
