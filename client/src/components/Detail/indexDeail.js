import React,{ useEffect} from 'react'
import {Link } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getDetail } from '../../redux/actions';

export default function Detail(props){
 console.log(props)
 
 const dispatch=useDispatch()
 
 
 useEffect(()=>{
   
    dispatch(getDetail(props.match.params.id))
    console.log('yo soy detail de params',props.match.params.id)
},[])
 
const myDogs=useSelector((state)=>state.detail)// mi traigo desde el reducer

return(
   
    <div className='form'  >
<br/>
      <h1 className="title-cardCreate"> Breeds Detail</h1>
      
      
           <br/>
           <br/>
         <span className='containerMayor'>
        {
            myDogs.length>0?
            <div className='card-containers'  >
             
                 <img className='img' src={myDogs[0].img? myDogs[0].img:myDogs[0].img} alt="" width="190px" height="190px"/> 
                 <div  className='titulo-temperamentos'>
                 <h1 className='name'>{myDogs[0].name}</h1><h5 >Temperaments:  </h5>  
                 <h5 > {!myDogs[0].created? myDogs[0].Temperament + ' - ' : myDogs[0].temperaments.map(el=>el.name + ('  '))}</h5>   
               
                 <h5>Height:     {myDogs[0].height_min}     -   {myDogs[0].heigh_max} Cms </h5>
                 <h5 >Weight:    {myDogs[0].weight_min}  -  {myDogs[0].weight_max} Kgs</h5>   
                 <h5 >Life_Span:  {myDogs[0].life_span}</h5>
                 </div> 
               
           </div >:
           <span className='spinner'>
           <p >Loading...</p></span>
        }
        </span>
      
        <br/>
        <br/>
        <Link to='/home'>
           
           <button className='butt'>Go to Home</button>
        </Link> 
        
     </div>
)
}

/** Temperament localhost */
/* db ....temperaments*/