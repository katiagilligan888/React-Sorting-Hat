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
      total: 5,
      answerCount : {
        Gryffindor: 0, 
        Slytherin: 0, 
        Hufflepuff: 0, 
        Ravenclaw: 0
      },
      finished: ""
    }
  }

  clickedAnswerHandler = (type) => {
    if(this.state.question <= 6 ){
      this.setState(prevState =>{
        return {
          counter: prevState.counter + 1,
          question: prevState.counter + 1
        }
      });
      if(type === "Gryffindor"){
        this.setState(prevState => {
          return {
            answerCount: {
              Gryffindor: prevState.answerCount.Gryffindor + 20,
              Slytherin: prevState.answerCount.Slytherin, 
              Hufflepuff: prevState.answerCount.Hufflepuff, 
              Ravenclaw: prevState.answerCount.Ravenclaw
            }
          }
        }); 
      }
      if(type === "Slytherin"){
        this.setState(prevState => {
            return{ answerCount: {
                Gryffindor: prevState.answerCount.Gryffindor,
                Slytherin: prevState.answerCount.Slytherin + 20, 
                Hufflepuff: prevState.answerCount.Hufflepuff, 
                Ravenclaw: prevState.answerCount.Ravenclaw
             }
          }
        });
      } 
      if(type === "Hufflepuff"){
          this.setState(prevState => {
            return { answerCount: {
              Gryffindor: prevState.answerCount.Gryffindor,
              Slytherin: prevState.answerCount.Slytherin, 
              Hufflepuff: prevState.answerCount.Hufflepuff + 20, 
              Ravenclaw: prevState.answerCount.Ravenclaw
            }
          }
          });
        }
      if(type === "Ravenclaw"){
              this.setState(prevState => {
                return { answerCount: {
                  Gryffindor: prevState.answerCount.Gryffindor,
                  Slytherin: prevState.answerCount.Slytherin , 
                  Hufflepuff: prevState.answerCount.Hufflepuff, 
                  Ravenclaw: prevState.answerCount.Ravenclaw + 20, 
                }
              }
              }); 
            }
    }

    // if(this.state.question === 5){
    //   console.log("done")
    //   this.setState({
    //     question: 0
    //   });
    // }
  }
  render() {
    return (
      <div className="App">
        <Header />
        <QuestionCount counter = {this.state.counter} total = {this.state.total} />
        <Question  question = {questions[this.state.question].question}  />
        <Answers click = {this.clickedAnswerHandler} answers = {questions[this.state.question].answers} />
      </div>
    );
  }
}

export default App;
