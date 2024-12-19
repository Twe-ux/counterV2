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
  const [array, setArray] = useState([<Counter />]);
  // const addCounter = () => {
  //   setArray([...array, <Counter />]);
  // };
  const addCounter = () => {
    const newArray = [...array];
    newArray.push(<Counter />);
    setArray(newArray);
  };
  const supCounter = () => {
    const newArray = [...array];
    newArray.pop(<Counter />);
    setArray(newArray);
  };

  console.log(array);

  return (
    <>
      <Header />
      <main>
        <div className="add-counter">
          {array.length < 3 && <AddCounter addCounter={addCounter} />}
        </div>
        <section>{array}</section>
        {array.length > 1 && <SupCounter supCounter={supCounter} />}
      </main>
    </>
  );
}

export default App;
