import './Logo.css';
import React from 'react';
// @ts-ignore
import logo from '../../assets/images/logo.svg';
import { Link } from 'react-router-dom';


export default props =>
    <aside className="logo">
        <Link to="/" className="logo">
            <img src={logo} alt="Take Blip" />
        </Link>
</aside>