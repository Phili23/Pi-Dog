import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,filterByTemperaments,filterCreated, OrderByBreeds, OrderByWeigh_Min_to_Max ,OrderByWeigh_Max_to_Min, getTemperaments,byOrder} from '../../redux/actions/index.js'
import {Link} from "react-router-dom"
import Card from "../Card/index.jsx";
import Paginado from "../Paginado/index.jsx";
import SearchBar from '../SearchBar/index'



import './index.css'



export default function Home() {
  const dispatch = useDispatch(); //despachando las acciones

  const allDogs = useSelector((state) => state.dogs); //mapstpatoprops
  const allTemperaments = useSelector((state) => state.temperaments); //mapstpatoprops 
  

  const [force, setForce] = useState('');
  const [order, setOrder] = useState('');
  const [temps, setTemps] = useState('')
  const [weight, setWeight] = useState('')
  const [weightMax, setWeightMax] = useState('')
  const [currentPage, setCurrentPage]=useState(1)//primer pagina actual
  const[dogsPerPage,setDogsPerPage]=useState(8)//cuantas razas  por pagina 
  const indexOfLastDogs = currentPage * dogsPerPage; //15
  const indexOfFirstDogs = indexOfLastDogs - dogsPerPage; //0
  const currentDogs = allDogs.slice(
    indexOfFirstDogs,
    indexOfLastDogs
  );
     const length = allDogs?.length; 
  //1-----0------15
  //2-----16-----31
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  
  //componentDimount
  //traaer los personajes cundo el componente se monta
  useEffect(() => {
    dispatch(getDogs()); //se pasa la accion
  }, [dispatch]);

/* Para disparar la accion GetTemps , y llenar el estado con los temperamentos*/
  useEffect(() => {
    dispatch(getTemperaments()); //se pasa la accion
  }, [dispatch]);


function handleClick(e){
  e.preventDefault();
  dispatch(getDogs())
  //se despacha la accion
}


function handleFilterTemps(e){
  console.log('Temps D DILTRO e target.value', e.target.value)
    dispatch(filterByTemperaments(e.target.value)) 
   setCurrentPage(1)
   setTemps(`Ordenado ${e.target.value}`)   
 
   
 }

function handleOrderByBreeds(e) {
  e.preventDefault();
  dispatch(OrderByBreeds(e.target.value))
  setCurrentPage(1)
   setOrder(`Ordenado ${e.target.value}`) 
};



function handleFilterCreated(e) {
  e.preventDefault();
  dispatch(filterCreated(e.target.value))
  setCurrentPage(1);
  setOrder(`Ordenado ${e.target.value}`)
  }

function handleOrderByWeigh_min(e) {
 /*  console.log('y ordenado por peso minimo', e.target.value)
  dispatch(OrderByWeigh_Min_to_Max(e.target.value))
  e.preventDefault();
  setCurrentPage(1)
  
   const allDogs2 = allDogs.sort((a, b) => {
    if (Number(a.weight_min) > Number(b.weight_min)) return 1;
    if (Number(a.weight_min) < Number(b.weight_min)) return -1;
    return 0;
    
  });
  setOrder(`Ordenado ${e.target.value}`)  
   */

}

function handleOrderByWeigh_max(e) {
/* console.log('y ordenado por peso minimo', e.target.value)
dispatch(OrderByWeigh_Max_to_Min(e.target.value))
e.preventDefault();
setCurrentPage(1)

 const allDogs2= allDogs.sort((a, b) => {
  if (Number(a.weight_min) === Number(b.weight_min)) return 0;
  if (Number(a.weight_min) > Number(b.weight_min)) return -1;
  return 1;
  
});
setOrder(`Ordenado ${e.target.value}`)   */
  
}


return(
  <div>
       <Link  to ='/'><button  className="" >Main - Page</button></Link>
       <Link   to ='/create'><button   className="">Create Dog Breed</button></Link>
  
    <h1 className="titulo"> DOGS BREEDS</h1>
    <button onClick={e=>{handleClick(e)}}>Reload all Dog Breeds</button>

    <select onChange={e=> handleOrderByBreeds(e)}>
   {/*  <option value="">By BREEDS</option>
    <option value='asc'>SORT</option>
                    <option value='asc'>Forward</option>
                    <option value='desc'>Backward</option>
                    <option value='weigh_min'>Rating</option>
                    <option value='date'>Date</option>
             */}
            </select>
   
    <select onChange={e=>handleFilterCreated(e)}>
     <option value='asc'>Ascendente ↑</option>
     <option value='desc'>Descendente ↓</option> 
            </select>


            <select  onChange={e=>handleOrderByWeigh_min(e)} >
  {/*   <option >Order Weight...By Min</option> 
    <option value="weight_min">Weight min-max</option> */}
                 
    </select>


  <select  onChange={e=>handleOrderByWeigh_max(e)} value={weight}>
 {/*  <option value="">Order Weight..By Max</option>
   <option value="weight_min">Weight max-min</option>
         */}
</select>

{/* {!allTemperaments?<h1>Cargando...</h1>: */}
   {/*  <select onChange={e=>handleFilterTemps(e)}>
        <option value='All'>
          {allTemperaments.sort().map(g => <option key={g.name} value={g.name}>{g.name}</option>)} 
          </option>
         </select>  */}  
 <span>Temperament</span>
                    <select onChange={handleFilterTemps}>
                        {/* <option value="All">All</option>
                        {allTemperaments.sort().map(g => <option key={g.name} value={g.name}>{g.name}</option>)} */}
                    </select>
         
    
    <div>
    <Paginado 
     dogsPerPage={dogsPerPage}
     allDogs={allDogs.length}
    paginado={paginado}/>

   

     <SearchBar    
     />   
      <br />
        <br />
        <div className =''> 
   
    { currentDogs?.map((el)=>{
       return(
       <Link to={'/home'+el.id} key={el.id}>
        {/*  <div className="container-cards "> */}
        <Card    name={el.name} 
     img={el.img? el.img:el.image}
      temperaments={ !currentDogs[0].created? currentDogs[0].Temperament + ' - ' : currentDogs[0].temperaments.map(el=>el.name + ('  '))}

        /*    {!myDog[0].createdInDb ? myDog[0].temperament + " " : myDog[0].temperaments.map(el => el.name + " ")}*/
     weight_min={el.weight_min}  
      weight_max={el.weight_max}/>
     {/*  </div> */}
      </Link>)
      })}
      </div>
      
      </div>
      </div>
//API..Temperament
//db..temperaments*/
)
    }