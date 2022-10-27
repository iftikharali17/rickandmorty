import React from 'react';
import styles from './Cards.module.css'

function Cards({results}) {
    let cardResult;
    if (results) {
        cardResult = results.map( (charArray) => {
            let {id, name, image, location} = charArray
            return ( 
            <div 
                key={id} 
                className="col-lg-4 col-md-6 col-12 mb-4"
            >
                <div className={`${styles.cards} d-flex flex-column justify-content-center`}>
                    <img src={image} alt="" className={`${styles.img} img-fluid`} />
                    <div className={styles.cardContent}>
                        <div className="fs-4 fw-bold mb-4">{name}</div>
                        <div className="">
                            <div className="fs-6">Location</div>
                            <div className="fs-5">{location.name}</div>
                        </div>
                    </div>
                </div>
                
            </div> 
            )
        })
    }
    else {
        cardResult = "Please write correct character names";
    }
    return (
        <>
            {cardResult}
        </>
    );
}

export default Cards;