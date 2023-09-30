import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [employee, setEmployee] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3000/").then((res) => {
      console.log(res, typeof res.data);
      setEmployee(res.data);
    });
  }, []);
  console.log(employee);
  return (
    <ol className=" grid text-center">
      {employee.map((employee, index) => (
        <li key={index} className="container">
          {employee.name}
        </li>
      ))}
    </ol>
  );
}

export default App;
