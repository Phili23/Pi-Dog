import React,{ useEffect} from 'react'
import {Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getDetail } from '../../redux/actions';
import './index.css'

export default function Detail(props){
 console.log(props)
 
 const dispatch=useDispatch()
 
 
 useEffect(()=>{
   
    dispatch(getDetail(props.match.params.id))
    console.log('yo soy detail de params',props.match.params.id)
},[dispatch])
 
const myDogs=useSelector((state)=>state.detail)

return(
    <div  className="espacio">
       <span className=''>
         <Link to='/home'>
            <button>Go to Home</button>
         </Link>  
        {
            myDogs.length>0?
            <div className=''>
               <h1>{myDogs[0].name}</h1>
               <span className= "columnas">
                 <img   src={myDogs[0].img? myDogs[0].img:myDogs[0].img} alt="" width="500px" height="700px"/> </span>
                
                 <div>
                    <ul className=''>
                <h5 className='='>Min_height:{myDogs[0].height_min}</h5>
                 <h5>Max_height:{myDogs[0].height_max}</h5>
                <h5>Min_Weight:{myDogs[0].weight_min}</h5>
                <h5>Max_Weight:{myDogs[0].weight_max}</h5>
                <h5>Life_Span:{myDogs[0].life_span}</h5>
                {/*  <h5>Temperaments   :{myDogs[0].temperament}</h5>   */}
           <h5>Temperaments: {myDogs[0].created? myDogs[0].temperaments.map(i => i.name + (', ')) : myDogs[0].temperament + ''}</h5>   
           
                 </ul>
                 </div>
                 
           </div>:<p>Loading...</p>
           
        }
       </span>
     </div>
)
}
