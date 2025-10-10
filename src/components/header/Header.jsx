import React from "react";
import { NavLink } from "react-router-dom";
import './header.style.css';

export default () => {
    return <div className="app-header">
        <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">Booking</span>
        </div>
        <nav className="menu">
            <NavLink to='/' className="header-link"> Home </NavLink>
            <NavLink to='/about' className="header-link"> About </NavLink>
            <NavLink to='/hotels' className="header-link"> Hotels </NavLink>
        </nav>
    </div>
}
