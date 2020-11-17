import React from 'react';
const myComponent = (props) => {
    let answer = null;
    if (props.showAnswer) {
        answer = (
            <div className="answer">
            <p className="paragraph">{props.answer}</p>
            </div>
        )
    }
    
    return(
        <div className="question">
            <div className="styling">
                <span>{props.title}</span>
                <button onClick={props.showAnswerFunc}>{props.button}</button>
            </div>
            {answer}
        </div>
    ) 
}
export default myComponent