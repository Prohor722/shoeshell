import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div className='cover-container'>
            <div className='intro'>
                <h1>Our Design your style..</h1>
            </div>
            <div className='main-image'>
                <img src="https://images.unsplash.com/photo-1608256301056-3806c4970e64?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;