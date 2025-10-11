import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import './header.style.css';

const menuItems = [
    {to: '/', title: 'Home'},
    {to: '/about', title: 'About'},
    {to: '/hotels', title: 'Hotels'},
];

export default () => {
    return <div className="app-header">
        <NavLink to='/' className="header-link">
            <div className="logo">
                <span className="logo-icon"></span>
                <span className="logo-text">Booking</span>
            </div>
        </NavLink>
        <nav className="menu">
            {menuItems.map(({ to, title }) => {
                return <NavLink to={to} key={to} className="header-link"> 
                    <Button variant="contained" color="warning" size="small"> 
                        {title} 
                    </Button>
                </NavLink>
            })}
        </nav>
    </div>
}
