import "./App.css";
import { useState } from "react";

function App() {
  const [xAxis, setXAxis] = useState("200");
  const [yAxis, setYAxis] = useState("200");

  const submit = "https://placebear.com/g/" + xAxis + "/" + yAxis;

  return (
    <div className="App">
      <input placeholder="X-axis" onChange={setXAxis} />
      <input type="text" placeholder="Y-axis" onChange={setYAxis} />
      <a href={submit}>
        <button type="submit">Submit</button>
      </a>
    </div>
  );
}

export default App;
