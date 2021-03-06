import React,{ useEffect} from 'react'
import {Link,useParams } from 'react-router-dom'
import { useDispatch, useSelector} from 'react-redux'
import { getDetail,  reset } from '../../redux/actions';

export default function Detail(props){
 console.log(props)
 
 const dispatch=useDispatch()
 const {id} = useParams()   //la obtengo con este hook, porquue en el routa de mi App le especifico

 function reiniciar() {
   dispatch(reset());
 }

 useEffect(()=>{
   dispatch(getDetail(id));//traigo el estado detail
},[id, dispatch])

useEffect(()=>{
 return () => console.log("componente desmontado");//traigo el estado detail}
/* function handleClick(tipo) {
   reiniciar();
   dispatch(ordenarVideogamesRating(tipo));*/
 })


function handleClick(id) {
   reiniciar()
   dispatch(getDetail(id));
 }
 
 
const myDogs=useSelector((state)=>state.detail)//le traigo desde el reducer

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
           
           <button className='butt'  onClick={ handleClick(reset)} >Go to Home</button>
        </Link> 
        
     </div>
)
}


/******Correci??n PI  Maria
Viernes, 21 de enero ?? 3:30 ??? 4:00pm
Informaci??n para unirse a Google Meet
Enlace a la videollamada: https://meet.google.com/mfk-xygq-xyr
O marca el: ???(CO) +57 601 8956250??? PIN: ???476 804 209 4891???#
M??s n??meros de tel??fono: https://tel.meet/mfk-xygq-xyr?pin=4768042094891 */

/** Temperament localhost */
/* db ....temperaments*/


/* 
const [categories, setCategories] = useState([])
const [showFixed, setShowFixed] = useState(false)

useEffect(function () {
  window.fetch('https://petgram-server.midudev.now.sh/categories')
    .then(res => res.json())
    .then(response => {
      setCategories(response)
    })
}, []) */