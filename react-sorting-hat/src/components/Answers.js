import React from 'react'; 
import Answer from './Answer';

const Answers = props => {
    return props.answers.map(answer => {return <Answer clicked = {() => props.click(answer.type)} type = {answer.type} answerContent = {answer.content} />})
}

export default Answers; 
