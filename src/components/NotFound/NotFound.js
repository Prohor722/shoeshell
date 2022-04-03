import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound'>
        <h1>Not Found !!  404</h1>
         <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
         <Link to='/'>
            <button>Home</button>
         </Link>   
        </div>
    );
};

export default NotFound;