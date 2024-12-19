import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const decrement = () => {
    setCounter(counter - 1);
  };
  const increment = () => {
    setCounter(counter + 1);
  };
  const reset = () => {
    setCounter(0);
  };

  return (
    <div className="component">
      <div className="container">
        <div className="box-icon">
          {counter > 0 && (
            <button onClick={decrement}>
              <FontAwesomeIcon icon="minus" />
            </button>
          )}
        </div>
        <div className="counter">{counter}</div>
        <div className="box-icon">
          {counter < 10 && (
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
