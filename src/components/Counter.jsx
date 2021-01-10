import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ value }) => {
  
  const defaultValue = value < 0 ? 0 : value > 100 ? 100 : value;
  const [count, setCount] = useState(defaultValue);

  const handleSum = () => {
    count < 100 && setCount(count + 1);
  }

  const handleSubstract = () => {
    count > 0 && setCount(count -1);
  }

  const handleReset = () => {
    setCount(0);
  }

  return (
    <div>
      <h1>Counter App</h1>
      <h2>Value: { count }</h2>
      <button onClick={ handleSum }>
        Increment
      </button>
      <button onClick={ handleSubstract }>
        Decrement
      </button>
      <button onClick={ handleReset }>
        Reset
      </button>
    </div>
  );
}

export default Counter;

Counter.propTypes = {
  value: PropTypes.number
}
