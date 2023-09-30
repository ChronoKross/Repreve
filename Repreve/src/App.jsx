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
    const updatedStack = stack.filter((name) => name !== clickedName);
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
