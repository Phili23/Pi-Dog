import React,{ useEffect} from 'react'
import {Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getDetail } from '../../redux/actions';

export default function Detail(props){
 console.log(props)
 
 
 const myDogs=useSelector((state)=>state.detail)
 
 const dispatch=useDispatch()
 const {id} = props.match.params;


useEffect(()=>{
   
    dispatch(getDetail(props.match.params.id))
},[dispatch])


return(
    <div>
        {
            myDogs.length>0?
            <div>
                <h1>{myDogs[0].name}</h1>
                 <img src={myDogs[0].img? myDogs[0].img:myDogs[0].img} alt="" width="500px" height="700px"/> 
                <h1>Min_height   :{myDogs[0].height_min}</h1>
                <h1>Max_height   :{myDogs[0].height_max}</h1>
                <h1>Min_Weight   :{myDogs[0].weight_min}</h1>
                <h1>Max_Weight   :{myDogs[0].weight_max}</h1>
                <h1>Life_Span   :{myDogs[0].life_span}</h1>
                 <h5>Temperaments   :{myDogs[0].temperament}</h5>  
           </div>:<p>Loading...</p>
        }
        <Link to='/home'>
            <button>Back</button>
         </Link>  
     </div>
)
}
