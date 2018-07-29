import React from 'react'; 

const QuestionCount = props => {

    return (
        <div className = "question-count">
            <p> Question <strong>{props.counter}</strong> of <strong>{props.total}</strong></p>
        </div>
    )
}

export default QuestionCount; 
