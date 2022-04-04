import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='my-3 p-3'>
            <div className='nav d-flex justify-content-center py-3 fixed-top'>
                <Link to="/">Home</Link>
                <Link to="/review">Review</Link>
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;