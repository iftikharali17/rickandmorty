import React from 'react';
import FilterBtn from '../FilterBtn';

function Gender({ setGender, setPageNumber }) {
    let genders = [
        "female", 
        "genderless",
        "male",
        "unknown"
    ]
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    Gender
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body d-flex flex-wrap gap-3">
                {genders.map( (items, index) => (
                    <FilterBtn 
                    update={setGender}
                    setPageNumber={setPageNumber}
                    key={index} 
                    name="gender" 
                    index={index} 
                    items={items} />
                ))}
                </div>
            </div>
        </div>
    );
}

export default Gender;