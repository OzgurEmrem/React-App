import React, { Component } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters'
import {render} from '@testing-library/react';

class App extends Component{
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handelIncrement = (counter) => {
    let counterObject = this.state.counters;
    counterObject[counter.id - 1].value++;
    this.setState({ counterObject: this.state.counters });

    console.log("Increment Clicked");
    console.log(this.state.counters.value);
  };

  handelDecrement = (counter) => {
    let counterObject = this.state.counters;
    if (counter.value === 0) return;
    counterObject[counter.id - 1].value--;
    this.setState({ counterObject: this.state.counters });

    console.log("Decrement Clicked");
    console.log(this.state.counters.value);
  };

  handleDelete = (counterId) => {
    console.log("button deleted : ", counterId);
    let counters = this.state.counters.filter((c) => c.id !== counterId);

    for (let i = 0; i < counters.length; i++) {
      counters[i].id = i + 1;
    }

    this.setState({ counters });
  };
  addButton = () => {
    let newArryObj = this.state.counters;
    newArryObj[this.state.counters.length] = {
      id: this.state.counters.length + 1,
      value: 0,
    };

    for (let i = 0; i < this.state.counters.length; i++) {
      newArryObj[i].id = i + 1;
    }

    this.setState({ newArryObj: this.state.counters });
  };

  resetButton = () => {
    let counterObject = this.state.counters;

    for (let i = 0; i < counterObject.length; i++) {
      counterObject[i].value = 0;
    }
    console.log(counterObject);
    this.setState({ counterObject: this.state.counters });
  };

render() {
   
    return (
      <React.Fragment>
        <NavBar totalCounter={this.state.counters.filter(c=>c.value>0).length}/>

            <main className="container">
                <Counters 
                counters={this.state.counters}
                onIncrement={this.handelIncrement}
                onDecrement={this.handelDecrement}
                onDelete={this.handleDelete}
                onAdd={this.addButton}
                onReset={this.resetButton}
                />
            </main>

      </React.Fragment>
      
  );
 
 }
}

export default App;
