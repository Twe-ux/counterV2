import "./assets/css/App.css";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faStopwatch,
  faMinus,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
library.add(faStopwatch, faMinus, faPlus);

import Header from "./components/Header";
import AddCounter from "./components/AddCounter";
import Counter from "./components/Counter";
import SupCounter from "./components/SupCounter";
import { useState } from "react";

function App() {
  /** V2 */
  // const [array, setArray] = useState([<Counter />]);
  // // const addCounter = () => {
  // //   setArray([...array, <Counter />]);
  // // };
  // const addCounter = () => {
  //   const newArray = [...array];
  //   newArray.push(<Counter />);
  //   setArray(newArray);
  // };
  // const supCounter = () => {
  //   const newArray = [...array];
  //   newArray.pop(<Counter />);
  //   setArray(newArray);
  // };
  // console.log(array);

  /** V3 */
  // Prepare the table of all values.
  const [counterValues, setCounterValues] = useState([0]);

  // Callback used to add a new counter.
  function addCounter() {
    // This is the same as:
    // const newValues = [...counterValues];
    // newValues.push(0);
    // setCounterValues(newValues);
    setCounterValues(counterValues.concat(0));
  }

  // Callback used to remove the last counter.
  function removeCounter() {
    // This is the same as:
    // const newValues = [...counterValues];
    // newValues.pop();
    // setCounterValues(newValues);
    setCounterValues(counterValues.slice(0, counterValues.length - 1));
  }

  // Callback used to update a value in the counter.
  function setCounterValue(value, index) {
    // This is the same as:
    // const newValues = [...counterValues];
    // newValues[index] = value;
    // setCounterValues(newValues);
    setCounterValues(counterValues.toSpliced(index, 1, value));
  }

  // Render all the counters.
  const counterElements = counterValues.map(function renderCounterValue(
    value,
    index
  ) {
    return (
      <Counter
        key={index}
        value={value}
        updateCounterValue={(value) => setCounterValue(value, index)}
      />
    );
  });

  return (
    <>
      <Header />
      <main>
        <div className="add-counter">
          {counterValues.length < 3 && <AddCounter addCounter={addCounter} />}
        </div>
        <section>{counterElements}</section>
        {counterValues.length > 1 && <SupCounter supCounter={removeCounter} />}
      </main>
    </>
  );
}

export default App;
