import React, { useState } from 'react';
import Header from './Header';
import Counter from './Counter';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <Header title="Sample React App" />
      <Counter count={count} setCount={setCount} />
    </div>
  );
}

export default App;


