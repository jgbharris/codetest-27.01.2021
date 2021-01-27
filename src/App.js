import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://savills-techtest-nwapi.eba-eammdiqd.eu-west-2.elasticbeanstalk.com/stations")
        .then((response) => response.json())
        .then((data) => setData(data));
}, []);

console.log("data", data)

  return (
    <div className="App">
     <h1>TEST</h1>
    </div>
  );
}

export default App;
