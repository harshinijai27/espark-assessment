import React from 'react';

function QuizQuestion() {
  return(
    <fieldset>
      <legend>Quiz Questions Example</legend>
      <label >Question 1:</label>
      <input type="text" id="quiz-answer1" name="fname"></input><br></br>
      <label >Question 2:</label>
      <input type="text" id="quiz-answer2" name="fname"></input><br></br>
      <label >Question 3:</label>
      <input type="text" id="quiz-answer3" name="fname"></input><br></br>
    </fieldset>
  );
}
export default QuizQuestion;