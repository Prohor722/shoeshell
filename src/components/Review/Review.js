import React from 'react';
import SingleReview from './SingleReview/SingleReview';
import useReview from '../hook/useReview'

const Review = ({items}) => {
    const [reviews, setReview ] = useReview([]);
    let allReview = reviews.slice(0,3);

    if(items!==3){
    allReview= reviews;
    }
    // console.log(items);
    console.log(allReview);
    return (
        <div className='row row-cols-lg-4 row-cols-md-3 g-3 my-5 mx-3 align-items-center justify-content-center'>
            {
                allReview.map(review=>{
                    return <SingleReview review={review} key={review.id}></SingleReview>
                })
            }
        </div>
    );
};

export default Review;