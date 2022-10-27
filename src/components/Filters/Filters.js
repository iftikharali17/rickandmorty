import React from 'react';

import Gender from '../Filters/Classification/Gender';
import Species from '../Filters/Classification/Species';


function Filters({ setGender, setSpecies, setPageNumber }) {

    let clear=()=>{
        
        setPageNumber("");
        setGender("");
        setSpecies("");
        window.location.reload(false)
    }

    return (
        <div className="col-lg-3 col-12 mb-5">
            <div style={{color: "#83c046"}} className="text-center fw-bold fs-4 mb-2">Filters</div>
            <div onClick={clear} style={{color: "#83c046", cursor: "pointer"}} className="text-center text-decoration-underline mb-4">Clear Filters</div>
        
            <div className="accordion" id="accordionExample">
                
                <Species setSpecies={setSpecies} setPageNumber={setPageNumber} />
                <Gender setGender={setGender} setPageNumber={setPageNumber} />
            </div>

        </div>
    );
}

export default Filters;