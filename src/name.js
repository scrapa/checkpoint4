import React from 'react';

const greet = props => {
console.log(props)
return <h1 style={{color:"red"}}>hello my name is {props.name}</h1>
}

export default greet ;