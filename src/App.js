import React, { useState, useEffect } from "react";
import './App.css';
import Autocomplete from "./Autocomplete";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://savills-techtest-nwapi.eba-eammdiqd.eu-west-2.elasticbeanstalk.com/stations")
        .then((response) => response.json())
        .then((data) => setData(data));
}, []);

const stations = data.data

console.log("stations", stations)

const stationsArray = []
if (stations) {
  for (let i = 0; i < stations.length; i++) {
    stationsArray.push(stations[i]["name"])
    };
}

console.log("stationsArray", stationsArray)

  return (
    <div className="App">
     <h1>Station Lookup</h1>
     <Autocomplete
        options={stationsArray
        }
      />
    </div>
  );
}

export default App;
