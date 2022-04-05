import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import { ChevronUpIcon } from '@heroicons/react/solid'
import { ChevronDownIcon } from '@heroicons/react/solid'

const Header = () => {
    // const [btn, setBtn] = useState(false);

    return (
        <div className='my-3 p-3 mb-5 pb-5 mb-lg-0 pb-lg-0'>
            <div className='mb-5 pb-5 mb-lg-0 pb-lg-0'></div>
            <div className='nav d-flex flex-column flex-lg-row justify-content-center py-3 fixed-top'>
                <div className='d-lg-none d-flex align-items-center justify-content-center'>
                    <h1>ShoeShell</h1>
                    {/* {(btn)? <ChevronUpIcon className='icon'></ChevronUpIcon> : <ChevronDownIcon className='icon'></ChevronDownIcon>} */}
                </div>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/review">Review</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/dashboard">Dashboard</NavLink>
                <NavLink to="/about">About</NavLink>
            </div>
        </div>
    );
};

export default Header;