import React from 'react';
// import spinner from "./spinner.gif";
import spin from "./spin.gif";
const Spinner = () =>  {
    return (
      <div className='text-center'>
        <img style={{height:"29px",width:"29px"}} src={spin} alt='lp' />
      </div>
    );
  }
export default Spinner;

