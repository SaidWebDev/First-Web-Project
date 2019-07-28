import React from 'react'

const person = (props)=> {

   return (
   <div>
            <p onClick={props.click}>I am {props.name} and I'm {props.age} years old </p>
            <h4> {props.children}</h4>
            <input type="text" onChange={props.changed} value={props.name}></input>

   </div>
   )
};

export default person;