import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    setCount(count + 1); 
  };
  const handleDecrease = () => {
    setCount(count - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <p>Count: {count}</p>
      <div className="flex flex-row gap-5">
        <button className="btn btn-primary" onClick={handleIncrease}>
          Increase Count
        </button>

        <button className="btn btn-secondary" onClick={handleDecrease}>
          Another Button
        </button>
      </div>
    </div>
  );
};

export default Counter;
