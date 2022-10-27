import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

function Pagination({ info, pageNumber, setPageNumber }) {
    let [width, setWidth] = useState(window.innerWidth)

    function getDimensions() {
        setWidth(window.innerWidth) // finding current window width for a responsive module
    }

    useEffect( () =>{
        window.addEventListener("resize", getDimensions)
        return () => window.removeEventListener("resize", getDimensions) 
    },[])

    return (
        <>
            <style jsx>
                {`
                    .btn.btn-primary,
                    .page-link {
                        background-color: #39670b;
                        border: none;
                        text-decoration: none;
                        -webkit-text-fill-color: #83c046;
                    }

                    .page-item.active .page-link {
                        background-color: #83c046;
                        -webkit-text-fill-color: #39670b;
                    }

                    .page-link:hover,
                    .btn-primary:hover,
                    .btn-primary:focus {
                        background-color: #83c046;
                        -webkit-text-fill-color: #39670b;
                    }

                    @media(max-width: 768px) {
                        .next, 
                        .prev {
                            display: none;
                        }
                        .pagination {
                            font-size: 20px;
                        }
                    }
                `}
            </style>
            <ReactPaginate 
                className="pagination justify-content-center gap-4 my-4" 
                forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
                pageCount={info?.pages}
                nextLabel="Next"
                previousLabel="Prev"
                nextClassName="btn btn-primary next"
                previousClassName="btn btn-primary previous"
                pageClassName="page-item"
                pageLinkClassName="page-link"
                marginPagesDisplayed={width < 576 ? 1 : 2}
                pageRangeDisplayed={width < 576 ? 1 : 2}
                onPageChange={(data) => {
                    setPageNumber(data.selected + 1)
                    console.log(data.selected + 1)
                    }
                }
                activeClassName="active"
            />
        </>
    );
}; 

export default Pagination;