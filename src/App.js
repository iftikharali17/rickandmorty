import 'bootstrap/dist/css/bootstrap.min.css'; //imported bootstrap css
import 'bootstrap/dist/js/bootstrap'; //imported bootstrap js
import './App.css';


import React, {useEffect, useState} from "react";

function App() {
  const [fetchedData, setFetchedData] = useState([]) // api data state variable
  const {info, results} = fetchedData; // destructuring api data

  const api = `https://rickandmortyapi.com/api/character/`; //api url from documentation of api

  useEffect( () => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data)
    })();
  },[api]);

  console.log(results) // data fetching correct

  return (
    <div className="App">
      <h1 className="my-4">Rick & Morty Character Search Engine</h1>

    </div>
  );
}

export default App;
