import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Counter = ({ value, updateCounterValue }) => {
  // const [counter, setCounter] = useState(0);
  const decrement = () => {
    updateCounterValue(value - 1);
  };
  const increment = () => {
    updateCounterValue(value + 1);
  };
  const reset = () => {
    updateCounterValue(0);
  };

  return (
    <div className="component">
      <div className="container">
        <div className="box-icon">
          {value > 0 && (
            <button onClick={decrement}>
              <FontAwesomeIcon icon="minus" />
            </button>
          )}
        </div>
        <div className="counter">{value}</div>
        <div className="box-icon">
          {value < 10 && (
            <button onClick={increment}>
              <FontAwesomeIcon icon="plus" />
            </button>
          )}
        </div>
      </div>

      <button onClick={reset} className="reset">
        reset
      </button>
    </div>
  );
};

export default Counter;
