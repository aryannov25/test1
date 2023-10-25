import "./App.css";
import { useState } from "react";

function App() {
  const [xAxis, setXAxis] = useState("200");
  const [yAxis, setYAxis] = useState("200");

  const submit = "https://placebear.com/g/" + xAxis + "/" + yAxis;

  return (
    <div className="App">
      <input
        value={xAxis}
        onChange={(e) => setXAxis(e.target.value)}
      />
      <input
        placeholder="Y-axis"
        value={yAxis}
        onChange={(e) => setYAxis(e.target.value)}
      />
      <a href={submit}>
        <button type="submit">Submit</button>
      </a>
    </div>
  );
}

export default App;
