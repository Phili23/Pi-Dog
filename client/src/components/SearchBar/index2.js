import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { getNameDogs } from "../../redux/actions";


export default function SearchBar(){
const dispatch=useDispatch()
const[name,setName]=useState("")

function handleInputChange(e){
 setName(e.target.value)
 console.log(name)
}

function handleSubmit(e){
    e.preventDefault()
    dispatch(getNameDogs(name))
}

return(
 <div>
    <input
    type='text'
    placeholder="Buscar..."
    onChange={(e)=>{handleInputChange(e)}}
    />
    <button type ="submit" onClick={(e)=>{handleSubmit(e)}}>Buscar</button>
    </div>
)
}