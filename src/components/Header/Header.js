import React from 'react';
import logo from '../../images/Logo.svg'
import './Header.css'
import { NavLink } from 'react-router-dom';
const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <NavLink className={({isActive})=>isActive ? 'style': undefined} to="/shop">Shop</NavLink>
                <NavLink className={({isActive})=>isActive ? 'style': undefined} to="/orders">Orders</NavLink>
                <NavLink className={({isActive})=>isActive ? 'style': undefined} to="/invetory">Inventory</NavLink>
                <NavLink className={({isActive})=>isActive ? 'style': undefined} to="/about">About</NavLink>
            </div>
        </nav>
    );
};

export default Header;

// 2.40mnt 