import React, { Component } from 'react'
import Person from './Person/Person';
export class App extends Component {
  render() {
    return (
      <div className="App">
         <h1> This is my react app!</h1>
         <p>This is really working </p>
         <Person name="Said" age="30" ></Person>
         <Person name="Amir" age="20"> I like playing soccer</Person>
         <Person name="Wafae" age="28"></Person>
      </div>


//React.createElement('div',null,React.createElement('h3',null, 'This is an h3 inside a div! LoooL'))
    )
  }
}

export default App
 



 