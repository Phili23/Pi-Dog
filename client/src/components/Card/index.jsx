import React from "react";
import './Card.css'
import {Link,useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import {deleteDog, getDogs} from '../../redux/actions'


export default function Card({ name, img, temperaments, weight_max, weight_min, height_min, heigh_max, life_span,created }) {


  const dispatch=useDispatch()
   const {id} = useParams()   //la obtengo con este hook, porquue en el routa de mi App le especifico
  
              
  
  function handleDelete(e) {// cdo se presiona Buscar, se despacha la accion p/ buscar en la api x name
    e.preventDefault()
    dispatch(deleteDog(id))
    dispatch(getDogs())
   .then(()=>{
       alert('Breed Dog Delete')
   })
    /*  setIDog(""); */
  }


  return (
    <div className="card:hover">
      <div className="espacio">
      {
                    created === true ? (
                        <button onClick={e => handleDelete(e)}>X</button>
                    )
                        : null
                
                    }
        <span className="card-containers">
          <span className="columnas"><img src={img} alt="no se encontró" style={{ width: "190px", height: "190px" }} /></span>
          <h3 className="name">{name}</h3>
          <h3 className="titulo-temperamentos" >  id: {id}</h3>
           <h3 className="titulo-temperamentos">Temperament: <br /> {temperaments}</h3>
          <span className="weight"> <h3 >Weight <br /> {weight_min} -
            {weight_max} kg</h3>
            <h3 >  Height <br /> {height_min} -{heigh_max}
              cms</h3>
            <h3 >  life_span <br /> {life_span}
            </h3>
          </span>


        </span>

      </div>
    </div>
  )
 /*    {if(img){
     img = "https://st3.depositphotos.com/1177973/14743/i/1600/depositphotos_147439097-stock-photo-group-of-cute-dogs.jpg";
 }}  */
}

