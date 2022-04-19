import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import ProgressBarComponent from './progressBar';
import Container from 'react-bootstrap/Container';
import '../css/cover.css';
 
function Reactivity() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  //Reactivity button registers clicks and progressbar tells users how many times has been clicked
  return (
    <Container fluid>
      <p>You clicked {count} times</p>
      <ProgressBarComponent className="progress" progress={count}></ProgressBarComponent>
      <Button variant="primary" className="btn btn-lg" onClick={() => setCount(count + 1)}>Click 10 times to fill progressbar</Button>
    </Container>
  );
}

export default Reactivity;