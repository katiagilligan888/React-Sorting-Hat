import React from "react"; 

const Header = (props) => {
    return(
        <div className = "header">
            <h1>Which Hogwarts House Do You Belong In?</h1>
            <img src = {props.src} width = "300px" />
            <div className = "header-content">
                <div className = "start-button" onClick = {props.click}>Begin The Sorting</div>
            </div>
        </div>
    )
    
}

export default Header; 