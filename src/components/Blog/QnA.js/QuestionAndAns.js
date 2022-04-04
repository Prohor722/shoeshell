import React from 'react';

const QuestionAndAns = (props) => {
    const {question, ans} = props.answerSheet;
    return (
        <div className='my-3'>
            <h4>{question}</h4>
            <p>{ans}</p>
        </div>
    );
};

export default QuestionAndAns;