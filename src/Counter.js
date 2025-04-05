import React from 'react';

const Counter = ({ count, setCount }) => {
  return (
    <div>
      <p style={{ fontSize: '24px' }}>Count is: {count}</p>
      <button 
        onClick={() => setCount(prev => prev + 1)} 
        style={{ fontSize: '16px', padding: '10px 20px', cursor: 'pointer' }}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;

  