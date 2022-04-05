import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='notFound d-flex flex-column justify-content-center align-items-center'>
         <h1>Not Found !!  404</h1>
         <img className='img-fluid' src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
         <Link to='/'>
            <button>Home</button>
         </Link>   
        </div>
    );
};

export default NotFound;