import React from "react";
import './Card.css'



export default function Card({id,name, img, temperament,weight_max,weight_min}){
   

    return(
        <div>
        
       <span className="card-container">
       <span className= "img-dog"><img src={img} alt="no se encontró" style={{width: "190px", height: "190px"}} /></span>
       <div>  
           <div className="titulo-dog-container">
         <h3 className="titulo-card">{name}</h3>
            
    
            <h3 className="temperamento:">Temperamento: <br/> {temperament}</h3>
            <h3 className="weight">Weight-Min: <br/> {weight_min}</h3>
            <h3 className="weight">Weight-Max: <br/> {weight_max}</h3>
            
            </div> 
</div>
        
        </span>
        
        </div>
    )
}

