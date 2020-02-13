import React from 'react';
import SubmittedAnswers from './SubmittedAnswers';
class  SurveyQuestions extends React.Component  {
constructor(){
  super();
  this.state = {
    data:[
      {
        Answer1:'aa',
        Answer2:'bb',
        Answer3:'cc'
      },
    ]
  };
}
  
onSubmit =(event) => {
  event.preventDefault();
  const Answer1 = this.Answer1.value;
  const Answer2 = this.Answer2.value
  const Answer3 = this.Answer3.value

  const answerSet = {Answer1:Answer1,Answer2:Answer2,Answer3:Answer3};
  const data = [...this.state.data,answerSet];
  this.setState({
    data:data
  });
};

render() {
  return (
    <div>
      <form onSubmit={this.onSubmit}>
        <label> What did you learn from the video?</label><br></br>
        <input id ="Answer1"  type="text" ref={input => this.Answer1 = input}></input><br></br>

        <label> will you recommend your sweet little friends to watch this video :)</label><br></br>
        <input id ="Answer2"  type="text" ref={input => this.Answer2 = input}></input><br></br>

        <label> How many times did you pause the video while watching? </label><br></br>
        <input id ="Answer3"  type="text" ref={input => this.Answer3 = input}></input><br></br>
        <button className="submit">submit</button>
      </form>

    <div className="submitted-answers">
    <h2>Submitted Answers</h2>
          {
            this.state.data.map((answerSet,index)=>
              <SubmittedAnswers key={index} answerSet={answerSet} />)
          }
      </div>
      </div>
  );
}
}

export default SurveyQuestions;