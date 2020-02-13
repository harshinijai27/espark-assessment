import React from 'react';
import Video from './Video';
import './App.css';
import QuizQuestion from './QuizQuestion';
import SurveyQuestions from './SurveyQuestions';
class App extends React.Component {
  render() {
  return (
  <div>
<Video video ="mRdMYuNeAng" autoplay="0" rel="0" modest="1" />,
<QuizQuestion />,
<SurveyQuestions />
<h1> Thank you </h1>
  </div>
  );
}
}
export default App;