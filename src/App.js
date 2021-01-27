import React, { useState, useEffect } from "react";
import { createStore } from 'redux'
import manuel from 'manuel'
import './App.css';
import { Provider } from 'react-redux'
import Autocomplete from "./Autocomplete";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://savills-techtest-nwapi.eba-eammdiqd.eu-west-2.elasticbeanstalk.com/stations")
        .then((response) => response.json())
        .then((data) => setData(data));
}, []);



console.log("data", data)
console.log("data.data", data.data)
const stations = data.data


// const stationsArray = []
// // eslint-disable-next-line
// stations ? stations.forEach((obj) => {
// 	Object.keys(obj).forEach((key) => {
//     stationsArray.push(obj[key]);
//   });
// }) : null;

const stationsArray = []
if (stations) {
  for (let i = 0; i < stations.length; i++) {
    stationsArray.push(stations[i]["name"])
    };
}


// console.log("stationsArray", stationsArray)
console.log("stationsArray", stationsArray)

  return (
    <div className="App">
     <h1>TEST</h1>
     <Autocomplete
        options={stationsArray
        }
      />
    </div>
  );
}

export default App;
