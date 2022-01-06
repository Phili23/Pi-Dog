import React from "react";


export default function Card({id,name, image, temperament,weight}){
   

    return(
        <div>
        <span >
            <h3>{name} </h3>
            <h5>{temperament} </h5>
            {/* <h5>{weight} </h5> */}
            <span className=""><img src={image} alt="no se encontró" style={{width: "190px", height: "190px"}} /></span>
        </span>
        </div>
    )
}