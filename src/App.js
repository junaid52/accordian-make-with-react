import React, {Component} from 'react';
import MyComponent from './myComponent/myComponent';
import './App.css';
class App extends Component {
  state = {
    accordian: [
      {
        title: 'Faq Question',
        button: 'click me',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus laoreet nibh vel lorem blandit fermentum.',
        showAnswer: false,
        key: 'ohj44'
      },
      {
        title: 'Faq Question',
        button: 'click me',
        answer: 'Vivamus vitae diam a dolor eleifend ultricies. Duis lectus sem, iaculis ac vestibulum vitae, interdum at tortor.',
        showAnswer: false,
        key: 'jklh45'
      },
      {
        title: 'Faq Question',
        button: 'click me',
        answer: 'Donec nulla orci, auctor ac placerat quis, pharetra in nibh. Donec vulputate justo ex, ac tempus lorem posuere non.',
        showAnswer: false,
        key: 'iou4534'
      }
    ],
    
    
    
  }
  showAccordianFunc = (index) => {
    
    const answer = {...this.state.accordian[index]};
    const accordian = [...this.state.accordian];
    const show = answer.showAnswer;
    accordian.forEach(el => {
      if(el.showAnswer === true) {
        el.showAnswer = false;
      }
    })
    answer.showAnswer = !show;
    
    accordian[index] = answer;
    this.setState({
      accordian: accordian
    })
  }
  render() {
    const accordian = this.state.accordian.map((el, index) => {
      return <MyComponent showAnswerFunc={this.showAccordianFunc.bind(this, index)} showAnswer={el.showAnswer} key={el.key} title={el.title} button={el.button} answer={el.answer}></MyComponent>
    })
    return (
      <div>
        {accordian}
      </div>
    )
  }
}


export default App;
