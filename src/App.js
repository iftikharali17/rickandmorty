import 'bootstrap/dist/css/bootstrap.min.css'; //imported bootstrap css
import 'bootstrap/dist/js/bootstrap'; //imported bootstrap js
import './App.css';

import Cards from './components/Cards/Cards'; //Card display module for characters
import Pagination from './components/Pagination/Pagination'; //React Pagination module

import React, {useEffect, useState} from "react";

function App() {
  const [pageNumber, setPageNumber] = useState(1) //page state variables
  const [fetchedData, setFetchedData] = useState([]) // api data state variable
  const {info, results} = fetchedData; // destructuring api data

  const api = `https://rickandmortyapi.com/api/character/`; //api url from documentation of api

  useEffect( () => {
    (async function(){
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data)
    })();
  },[api]);

  return (
    <div className="App">
      <h1 className="my-4">Rick & Morty Character Search Engine</h1>

      <div className="container">
        <div className="row">
          
          <div className="col-lg-8 col-12">
            <div className="row">
               <Cards results={results} />
            </div>
          </div>
        </div>
      </div>


      <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber} />
      
    </div>
  );
}

export default App;
