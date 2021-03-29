import React from 'react';
import './Backdrop.css';

const Backdrop = props => {
    return (
    <React.Fragment>
      <div className="backdrop"  onClick={props.click}/>
    </React.Fragment>
  );
};

export default Backdrop;