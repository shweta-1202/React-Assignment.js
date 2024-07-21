import React, { useState } from 'react';


function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => setCount(count - 1);
  const resetCount = () => setCount(0); // Reset count to 0

  return (
    <div className="container">
      <h1>Counter: {count}</h1>
      <button className="increment" onClick={incrementCount}>Increment</button>
      <button className="decrement" onClick={decrementCount}>Decrement</button>
      <button className="reset" onClick={resetCount}>Reset</button> {/* Reset button with "reset" class */}
    </div>
  );
}

export default Counter;
