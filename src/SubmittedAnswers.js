import React from 'react';
function SubmittedAnswers(props) {
  return (
    <div>
      <div className="col-md-6 col-lg-3">
        <div className="card mb-3">
          <div className="card-body">
            <p className="card-text"><span>Answer1: </span>{props.answerSet.Answer1}</p>
            <p className="card-text">
            <span>Answer2: </span>{props.answerSet.Answer2}
            </p>
            <p className="card-text">
            <span>Answer3: </span>{props.answerSet.Answer3}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SubmittedAnswers;