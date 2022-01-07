import React,{useState, useEffect} from 'react'
import{Link, useHistory} from 'react-router-dom'
import { postDogs,getTemperaments } from '../../redux/actions';
import { useDispatch, useSelector} from 'react-redux'
import './index.css'





export default function DogCreate(){
   const dispatch=useDispatch();
   const history=useHistory()
   const temperaments = useSelector((state) => state.temperaments); 
  

   const[input, setInput]=useState({
    name:"",
    height_min:"",
    height_max:"",
    weight_min:"",
    weight_max:"",
    life_span:"",
    temperament:[],
    img:"",
   })

     function handleChange(e){
       setInput({
           ...input,
           [e.target.name]:e.target.value
       })

   }
   
   function handleSelectT(e){
    setInput({
        ...input,
       temperament:[...input.temperament, e.target.value]
    })

}

function handleSubmit(e){
   e.preventDefault();
   console.log(input)
   dispatch(postDogs(input))
   console.log(postDogs())
   alert("Created Breeds Dogs ")
   setInput({
    name:"",
    height_min:"",
    height_max:"",
    weight_min:"",
    weight_max:"",
    life_span:"",
    temperament:[],
    img:"",
   })
   history.push('/home')
}

useEffect(()=>{
    dispatch(getTemperaments())
    
},[dispatch])
/*video1*/
   
   return(
       <div>

<Link  to ='/home'><button>Back-Home</button></Link>
        <h1>Create Breeds Dogs</h1>
        <form  className="container" onSubmit={(e)=>{handleSubmit(e)}}>
        <div>
            <label>Name</label>
            <input
            type="text"
            value={input.name}
            name="name"
            placeholder='name'
            onChange={(e)=>{handleChange(e)}}/>
        </div>

        <div>
            <label>height_min</label>
            <input
            type="number"
            value={input.height_min}
            name='height_min'
            placeholder='kilogramns..'
            onChange={(e)=>{handleChange(e)}}/>
            

        </div> 
        <div>
            <label>height_max</label>
            <input
            type="number"
            value={input.height_max}
            name='height_max'
            placeholder='kilogramns..'
            onChange={(e)=>{handleChange(e)}}/>
            

        </div> 


        <div>
            <label>Weight_Min</label>
            <input
            type="number"
            value={input.weight_min}
            name='weight_min'
            placeholder='kilogramns..'
            onChange={(e)=>{handleChange(e)}}/>
            

        </div>

        <div>
            <label>Weight_Max</label>
            <input
            type="number"
            value={input.weight_max}
            name='weight_max'
            placeholder='kilogramns..'
            onChange={(e)=>{handleChange(e)}}/>
            

        </div> 

        <div>
            <label>Life_Span</label>
            <input
            type="number"
            value={input.life_span}
            name='life_span'
            placeholder='Years Life..'
            onChange={(e)=>{handleChange(e)}}/>
            

        </div>
        <div>
            <label>Image</label>
            <input
            type="text"
            value={input.img}
            name='img'
            placeholder='url...'
            onChange={(e)=>{handleChange(e)}}/>

        </div>
        <div>
        <label>Temperaments</label>
        <select onChange ={(e)=>handleSelectT(e)}>
            
            {temperaments.map((temp)=>(
                <option value={temp.name} key={temp.id} >{temp.name}</option>
            ))}
            
        </select>
        <ul>
                        <li>{input.temperament.map(i => i + ", ")}</li>
                    </ul>
        
        </div>
        <button type='submit'>Created Breeds Dogs</button>

        </form>
       </div>
       
   )
}