import React, { Component } from 'react'
import Person from './Person/Person';
class App extends Component {

  state = {
    persons: [
      {name:"Said", age:30},
      {name:"Amir", age:20},
      {name:"Wafae", age:28}
    ],
    otherState: "a dummy thing."
  }

  switchNameHandler = ()=>{
    //console.log('this was clicked');
    this.setState({persons: [
      {name:"Simo", age:23},
      {name:"Amir", age:20},
      {name:"Wafae", age:27}
    ]})
  }

  render() {
    return (
      <div className="App">
         <h1> This is my react app!</h1>
         <p>This is really working </p>
         <button onClick={this.switchNameHandler}>Switch person</button>
         <Person name= {this.state.persons[0].name} age={this.state.persons[0].age} ></Person>
         <Person name={this.state.persons[1].name} age={this.state.persons[1].age}> I like playing soccer</Person>
         <Person name={this.state.persons[2].name} age={this.state.persons[2].age}></Person>
      </div>


//React.createElement('div',null,React.createElement('h3',null, 'This is an h3 inside a div! LoooL'))
    )
  }
}

export default App
 



 