import React from "react";
import './Card.css'



export default function Card({id,name, img, temperament,weight_max,weight_min}){
   
      {if(!img){
        img = "https://st3.depositphotos.com/1177973/14743/i/1600/depositphotos_147439097-stock-photo-group-of-cute-dogs.jpg";
    }} 
   /*   const temperamento=temperaments.map(el=>el)*/
 
   return(
    <div className="espacio">
    
    <span className="card-containers">
   <span className= "columnas"><img src={img} alt="no se encontró" style={{width: "190px", height: "190px"}} /> </span>
   <div>  
       <div className="name">
       <h3 className="titulo">{name}</h3>
    {/*  <h3 className="titulo-card">{name}</h3> */}
        

    <h3 className="titulo-temperamentos">Temperamento: <br/> {temperament}</h3>
        <h3 className="weight">Weight-Min: <br/> {weight_min}</h3>
        <h3 className="weight">Weight-Max: <br/> {weight_max}</h3>
        
        </div> 
</div>
    
</span>
    
    </div>
)
}
/*** para eestilo */
/* 

https://github.com/MacarenaZalazar/Doggieland/blob/main/client/src/components/CreateBreed/styledCreate.js
https://github.com/Franzcod/PI-Dogs/blob/master/PI-Dogs-main/client/src/Components/CreateNew/Create.js
https://github.com/Keltuzad29/PI-DOGS-FT15A/blob/main/client/src/components/DogCreate.jsx
https://github.com/LeonardoRosales1485/pi-dogs-front/blob/main/src/Components/AddDog/index.module.css
https://github.com/LucianaHer/PI-DOGS/blob/master/client/src/components/Dog_Form/DogForm.module.css
https://github.com/andresf2448/PI-Dogs/blob/main/PI-Dogs/client/src/Components/Card.jsx */