import React from "react";
import './index.css'


export default function Paginado({dogsPerPage, allDogs, paginado}){
    const pageNumbers=[]

   for(let i=1;i<=Math.ceil(allDogs/dogsPerPage);i++){
       pageNumbers.push(i);
   }
   return(
       <nav  >
            <ul className='' >
               { pageNumbers && 
               pageNumbers.map(number=>(
                   <li key={number}>
                <button  onClick={()=> paginado(number)}>{number}</button>
               
                </li>
               ))}
           </ul>
       </nav>
   ) 
}