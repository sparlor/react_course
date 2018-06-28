import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Scotty', age: 26 },
      { name: 'Amanda', age: 27 },
      { name: 'Jack', age: 1 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
   // console.log('Was clicked');
   // DONT DO THIS: this.state.persons[0].name = 'Scotty J'

   this.setState({
    persons: [
      { name: 'Scotty', age: 27 },
      { name: newName, age: 27 },
      { name: 'Jack', age: 1 }
    ]
     })
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Scotty', age: 27 },
        { name: event.target.value, age: 27 },
        { name: 'Jack', age: 1 }
      ]
       })
    }

    togglePersonsHandler = () => {


    }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding:'8px',
      cursor:'pointer',
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working</p>
        <button 
          style={style}
          onClick={() => this.togglePersonsHandler()}>Switch Name
          </button>
        <div>
          <Person
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />

          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Amanda!')}
          changed={this.nameChangedHandler}>My Hobbies: crying and not sleeping
          </Person>

          <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age} />
        </div>
      </div>
    );
  }
}

export default App;
