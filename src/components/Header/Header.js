import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='nav my-3 d-flex justify-content-center'>
            <Link to="/">Home</Link>
            <Link to="/review">Review</Link>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/about">About</Link>
        </div>
    );
};

export default Header;