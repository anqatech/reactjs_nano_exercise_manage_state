import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    const value1 = Math.floor(Math.random() * 100);
    const value2 = Math.floor(Math.random() * 100);
    const value3 = Math.floor(Math.random() * 100);

    this.state = {
      value1: value1,
      value2: value2,
      value3: value3,
      proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
      numQuestions: 0,
      numCorrect: 0
    }
  }
  
  handleAnswer = (answer) => {
    this.setState(function(previousState) {
      const trueAnswer = previousState.value1 + previousState.value2 + previousState.value3  === previousState.proposedAnswer
      const value1 = Math.floor(Math.random() * 100)
      const value2 = Math.floor(Math.random() * 100)
      const value3 = Math.floor(Math.random() * 100)
      return {
        value1: value1,
        value2: value2,
        value3: value3,
        proposedAnswer: Math.floor(Math.random() * 3) + value1 + value2 + value3,
        numQuestions: previousState.numQuestions + 1,
        numCorrect: (answer === trueAnswer) ? previousState.numCorrect + 1 : previousState.numCorrect        
      }
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={() => this.handleAnswer(true) }>True</button>
          <button onClick={() => this.handleAnswer(false) }>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    )
  }
}

export default App;
