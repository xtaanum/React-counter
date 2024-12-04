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
    <div>

      <div className="card bg-neutral text-neutral-content w-96 mx-auto my-20 ">
        <div className="card-body items-center text-center">
          <h2 className="card-title">Counter: {count} </h2>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={handleIncrease}>
              Increase
            </button>
            <button className="btn btn-secondary" onClick={handleDecrease}>
              Decrease
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
