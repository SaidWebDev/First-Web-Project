import React from 'react'

const person = (props)=> {

   return (
   <div>
            <p>I am {props.name} and I'm {props.age} years old </p>
            <h4> {props.children}</h4>

   </div>
   )
};

export default person;