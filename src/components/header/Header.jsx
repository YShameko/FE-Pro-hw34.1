import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "@mui/material";
import './header.style.css';

export default () => {
    return <div className="app-header">
        <div className="logo">
            <span className="logo-icon"></span>
            <span className="logo-text">Booking</span>
        </div>
        <nav className="menu">
            <NavLink to='/' className="header-link"> 
                <Button variant="contained" color="warning" size="small"> Home </Button>
            </NavLink>
            <NavLink to='/about' className="header-link">
                <Button variant="contained" color="warning" size="small"> About </Button>
            </NavLink>
            <NavLink to='/hotels' className="header-link">
                <Button variant="contained" color="warning" size="small"> Hotels </Button>
            </NavLink>
        </nav>
    </div>
}
