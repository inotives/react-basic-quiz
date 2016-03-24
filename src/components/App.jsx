import React, {Component} from 'react';
import QuestionList from './quiz/QuestionList.jsx';
import Scorebox from './quiz/Scorebox.jsx';
import Result from './quiz/Result.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [
        {
          id: 1,
          text: 'What is your name?',
          choices: [
              {id: 'a', text:'Mike'},
              {id: 'b', text:'Brad'},
              {id: 'c', text:'Steve'}
          ],
          correct: 'b'
        },
        {
          id: 2,
          text: 'Is React Cool?',
          choices: [
              {id: 'y', text:'Yes'},
              {id: 'n', text:'No'}
          ],
          correct: 'y'
        },
        {
          id: 3,
          text: 'Who are Cool Man?',
          choices: [
              {id: 'a', text:'Mike'},
              {id: 'b', text:'Brad'},
              {id: 'c', text:'Steve'}
          ],
          correct: 'c'
        },
        {
          id: 4,
          text: 'Mama boy is who?',
          choices: [
              {id: 'a', text:'Mike'},
              {id: 'b', text:'Brad'},
              {id: 'c', text:'Steve'}
          ],
          correct: 'a'
        }
      ],
      score: 0,
      current: 1
    }
  };

  setCurrent(current){
    this.setState({current})
  }

  setScore(score){
    this.setState({score})
  }

  render() {
    if(this.state.current > this.state.questions.length){
      var scorebox = '';
      var result = <Result {...this.state} />
    }else{
      var scorebox = <Scorebox {...this.state} />;
      var result = '';
    }
    return (
        <div>
          {scorebox}
          <QuestionList questions={this.state.questions} {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)} />
          {result}
        </div>
    );
  }
}

export default App
