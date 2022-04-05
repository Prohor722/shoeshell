import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Review from '../Review/Review';
import './Home.css'

const Home = () => {
    return (
        <div>
            <Header></Header>

            <div className='cover-container row m-0'>
                <div className='d-flex flex-column align-items-center justify-content-center intro col-md-8 m-0 p-0'>
                    <h1 className='bg-dark text-light'>Our Des<span className='site-color'>i</span>gn your style..</h1>
                    <p className='w-50 mt-3'>We are working day and night to provide you the best design and long lasting quality from <span className='site-color fw-bold'>ShoeShell</span> to your feet.</p>
                </div>
                <div className='main-image col-md-4 ms-0 p-0'>
                    <img className='img-fluid' src="https://images.unsplash.com/photo-1608256301056-3806c4970e64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                </div>
            </div>

            <div className='review my-5'>
                <h1>Customer Review</h1>
                <Review items={3}></Review>
                <Link to='/review'>
                    <button className='review-btn'>See all review</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;