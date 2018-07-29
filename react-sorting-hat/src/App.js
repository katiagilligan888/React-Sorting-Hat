import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {questions} from './quizQuestions.js'; 
import Question from './components/Question';
import QuestionCount from './components/QuestionCount';
import Header from './components/Header';
import Answers from './components/Answers';



class App extends Component {
  constructor(){
    super(); 
    this.state = {
      counter: 1, 
      question: 0, 
      total: 6,
      answerCount : {
        Gryffindor: 0, 
        Slytherin: 0, 
        Hufflepuff: 0, 
        Ravenclaw: 0
      },
      begin: false,
      finished: false
    }
  }

  clickedStartHandler = () => {
    if(this.state.begin === false){
      this.setState({
        begin: true
      })
    }
  }

  tryAgainClickHandler = () => {
    if(this.state.begin){
      this.setState({
        counter: 1, 
        question: 0, 
        total: 6, 
        answerCount : {
          Gryffindor: 0, 
          Slytherin: 0, 
          Hufflepuff: 0, 
          Ravenclaw: 0
        },
        finished: false,
        begin:false
      })
    }
  }

  clickedAnswerHandler = type => {

    if(this.state.question < 5){

      if(type === "Gryffindor"){
        this.setState(prevState => {
          return {
            answerCount: {
              ...prevState.answerCount, 
              Gryffindor: prevState.answerCount.Gryffindor + 20, 
            }, 
            counter: prevState.counter + 1, 
            question: prevState.question + 1
          }; 
        })
      }
      if(type === "Slytherin"){
        this.setState(prevState => {
          return {
            answerCount: {
              ...prevState.answerCount, 
              Slytherin: prevState.answerCount.Slytherin + 20, 
            }, 
            counter: prevState.counter + 1, 
            question: prevState.question + 1
          }
        })
      }
      if(type === "Hufflepuff"){
        this.setState(prevState => {
          return {
            answerCount: {
              ...prevState.answerCount, 
              Hufflepuff: prevState.answerCount.Hufflepuff + 20,
            }, 
            counter: prevState.counter + 1, 
            question: prevState.question + 1
          }
        })
      }
      if(type === "Ravenclaw"){
        this.setState(prevState => {
          return {
            answerCount: {
              ...prevState.answerCount, 
              Ravenclaw: prevState.answerCount.Ravenclaw + 20,
            }, 
            counter: prevState.counter + 1, 
            question: prevState.question + 1
          }
        })
      }

    }else{
      this.setState({
          finished: true
      });
    }
  }


  getWinner() {
    
    const winner =Object.entries(this.state.answerCount).sort(
      (a, b) => b[1] - a[1]
    )[0][0];

    return winner
  }

  render() {
    
    let questionsShow = null;
    let result = null;
    let beginScreen = null; 

    if(!this.state.begin){
      beginScreen = (
        <div>
          <Header src ={require("./HogwartsHouses.png")} click = {this.clickedStartHandler} />
        </div>)
    }else {
      if (!this.state.finished) {
        questionsShow = (
          <div className = "question-content">
            <QuestionCount
              counter={this.state.counter}
              total={this.state.total}
            />
            <Question question={questions[this.state.question].question} />
            <Answers
              click={this.clickedAnswerHandler}
              answers={questions[this.state.question].answers}
            />
          </div>
        );
      } else {
        result = (
          <div className = "result">
            <h1>Result</h1>
            <h2>{this.getWinner()}</h2>
            <div onClick = {this.tryAgainClickHandler} className = "newTestButton">Try Again</div>
          </div>
        );
      }
    }

    

    return (
      <div className="App">
        {beginScreen}
        {questionsShow}
        {result}
      </div>
    );
  }
}

export default App;
