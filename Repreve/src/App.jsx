import "./App.css";
import { useState } from "react";

function App() {
  const [stack, setStack] = useState([
    "Nathan",
    "Red",
    "Jose",
    "John",
    "Johny",
    "Ivan",
    "Eric",
    "Doug",
  ]);

  const handleClick = (clickedName) => {
    //filter removes the clicked name from the stack
    const updatedStack = stack.filter((name) => name !== clickedName);
    //push adds the clicked name to the end of the stack
    updatedStack.push(clickedName);
    setStack(updatedStack);
  };

  return (
    <ol className=" grid text-center">
      {stack.map((item, index) => (
        <li key={index} className="container" onClick={() => handleClick(item)}>
          {item}
        </li>
      ))}
    </ol>
  );
}

export default App;
