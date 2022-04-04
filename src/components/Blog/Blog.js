import React from 'react';
import useQNA from '../hook/useQNA';
import './Blog.css'
import QuestionAndAns from './QnA.js/QuestionAndAns';

const Blog = () => {
    const [allQna] = useQNA([]);
    return (
        <div className='blog p-5 mt-3 mb-5'>
          <h1 className='mt-3 mb-5'>Question Answer</h1>
          {allQna.map(eachQna=><QuestionAndAns answerSheet={eachQna}></QuestionAndAns>)}  
        </div>
    );
};

export default Blog;<h1>Blog Page</h1>