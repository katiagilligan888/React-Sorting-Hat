import React from 'react'; 

const QuestionCount = props => {

    return (
        <div className = "question-count">
            <p> Question {props.counter} of {props.total}</p>
        </div>
    )
}

export default QuestionCount; 
