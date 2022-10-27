import React from 'react';

function FilterBtn({name, index, items, update, setPageNumber}) {
    return (
        <div>
            <style jsx>
                {`
                   .target-form-check:checked + label {
                        background-color: #d2e043;
                        color: #83c046;
                        border: none;
                   }
                   .accordion-button {
                        color: #83c046;
                        font-weight: 700;
                   }
                   .accordion-button:not(.collapsed) {
                        background-color: #83c046;
                        color: #d2e054;
                   }
                   .btn-outline-primary {
                        background-color: #83c046;
                        color: #d2e054;
                        border: none;
                   }
                   .btn-outline-primary:active {
                        background-color: #d2e054 !important;
                        color: #83c046;
                        border: none;
                   }
                   .btn-outline-primary:hover,
                   .btn-outline-primary:focus {
                        background-color: #d2e054;
                        color: #83c046;
                        border: none;
                   }
                   input[type="radio"] {
                        display: none;
                   } 
                `
                }
            </style>
            <div className="form-check">
                <input 
                    onClick={() => {
                        setPageNumber(1)
                        update(items)
                        }
                    }
                    className="form-check-input target-form-check" 
                    type="radio" 
                    name={name}
                    id={`${name}-${index}`}
                />
                <label className="btn btn-outline-primary" for={`${name}-${index}`}>{items}</label>
            </div>
            
        </div>
    );
}

export default FilterBtn;