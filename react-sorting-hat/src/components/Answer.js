import React from "react"; 

const Answer = props => {
    // return <div type = {props.type}>{props.answer}</div>
    return (
        <div className = 'answer'>
            <p onClick = {() => props.clicked(props.type)} house = {props.type}>{props.answerContent}</p>
        </div>
    )
}

export default Answer; 