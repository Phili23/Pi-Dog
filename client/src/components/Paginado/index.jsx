import React from "react";
import './index.css'


export default function Paginado({dogsPerPage, allDogs, paginado}){
    const pageNumbers=[]

   for(let i=1;i<=Math.ceil(allDogs/dogsPerPage);i++){
       pageNumbers.push(i);
   }
   return(
       
           <div className="pagination" >
            <ul className='ul' >
                           { pageNumbers && 
               pageNumbers.map(number=>(
                   <span key={number}>

                                     
                <button className="button" onClick={()=> paginado(number)}>{number}</button>
                             
               
                </span>
                
               ))}
           </ul>
           </div>
    
   ) 
}