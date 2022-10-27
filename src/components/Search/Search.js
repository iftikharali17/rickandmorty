import React from 'react';
import styles from './Search.module.css'; //styles for Searchbar
import ReactPaginate from 'react-paginate'; 

function Search({ setSearch, setPageNumber}) {

    function searchTrigger(e) {
         setPageNumber(1) // shows only one page as a result
         setSearch(e.target.value) //updates Search state variable with user input
    }
 
    return (
        <div>
            <form className="d-flex flex-sm-row flex-column align-items-center justify-content-center gap-5 mb-5">
                <input onChange={searchTrigger} placeholder="Search a character" type="text" className={`${styles.input}`} />
                <button onClick={(e) => e.preventDefault()} className={`${styles.btn} btn btn-primary fs-5`}>Search</button>
            </form>
        </div>
    );
}

export default  Search;