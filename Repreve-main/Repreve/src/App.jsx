import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      setEmployees(res.data);
    });
  }, []);

  const handleClick = (clickedName) => {
    // Create a copy of the employees array
    const updatedStack = [...employees];
    // Filter out the clickedName
    const filteredStack = updatedStack.filter(
      (employee) => employee !== clickedName
    );
    // Push the clickedName to the end of the array
    filteredStack.push(clickedName);
    // Update the state with the modified array
    setEmployees(filteredStack);
    console.log(filteredStack);
  };

  return (
    <ol className=" grid text-center">
      {employees.map((employee, index) => (
        <li
          key={index}
          className="container cursor-pointer"
          onClick={() => handleClick(employee)}
        >
          {employee.name}
        </li>
      ))}
    </ol>
  );
}

export default App;
