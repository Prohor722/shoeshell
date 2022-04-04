import React from 'react';
import './SingleReview.css'

const SingleReview = (props) => {
    // console.log(props.review);
    const {image, name, rate, comment} = props.review;
    return (
        <div className='userReview shadow d-flex flex-column align-items-center justify-content-center p-3 mx-3'>
            <img src={image} alt=""/>
            <p>Rate: {rate}</p>
            <h5>{name}</h5>
            <p className='w-75'>{(comment.length>50)? comment.slice(0,50)+"...": comment}</p>
        </div>
    );
};

export default SingleReview;