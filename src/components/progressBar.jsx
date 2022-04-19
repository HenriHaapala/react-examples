import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComponent(props) {
  
    return (
        <ProgressBar now={props.progress * 10} />
    );
  }
  
  export default ProgressBarComponent;