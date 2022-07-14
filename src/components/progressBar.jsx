import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressBarComponent(props) {
  const now = props.progress * 20;
  const name = props.name;
    return (
        <div>
            <h3 class="mb-3">{name}</h3>
            <ProgressBar now={props.progress * 20} label={`${now}% ready`} />
        </div>
    );
  }
  
  export default ProgressBarComponent;