import React, { useState } from 'react';

export default function App() {

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        console.log('click');
        setCount(count + 1);
      }}>Click me</button>
    </div>
  );
}