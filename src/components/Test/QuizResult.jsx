import React from 'react'

function QuizResult(props) {
  return (
    <>
        <div className="show-score">
          <div className="score">
            Your Score : {props.score}
          </div>
          <div className="score">
            out of
          </div>
          <div className="score">
            Total Score : {props.totalScore}
          </div>
        </div>
        <button className='score-btn' id="next-button" onClick={props.tryAgain}>Try Again</button>
    </>
  )
}

export default QuizResult