import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";


export default function SearchBar(){
const dispatch=useDispatch()
const[name,setName]=useState("")

function handleInputChange(e){
e.preventDefault()
 setName(e.target.value)
 console.log(name)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameDogs(name))
}

return(
 <div >
    <input className="titulos"
    type='text'
    placeholder="Buscar..."
    onChange={(e)=>{handleInputChange(e)}}
    />
    <button  className="titulos" type ="submit" onClick={(e)=>{handleSubmit(e)}}>Search...</button>
    </div>
)
}