import React, {Component} from 'react';


class Result extends Component {


  render() {
    var percent = (this.props.score / this.props.questions.length * 100);
    if(percent > 80){
      var message = 'Awesome Job';
    }
    else if(percent < 80 && percent > 60){
      var message = 'You did Ok';
    }
    else{
      var message = 'Horrible';
    }
    return (
        <div className="well">
          <h4>You got {this.props.score} out of {this.props.questions.length} Correct.</h4>
          <hr />
          <h1>{percent}% - {message}</h1>
          <hr />
          <a className="btn btn-lg btn-primary" href="/">Take Again</a>
        </div>
    );
  }
}

export default Result
