import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,filterCreated, OrderByBreeds, OrderByWeigh_Min_to_Max,OrderByWeigh_Max_to_Min,filterByTemperaments, getTemperaments} from '../../redux/actions/index.js'
import {Link} from "react-router-dom"
import Card from "../Card/index.jsx";
import Paginado from "../Paginado/index.jsx";
import SearchBar from '../SearchBar/index'



import './index.css'



export default function Home() {
  const dispatch = useDispatch(); //despachando las acciones

  const allDogs = useSelector((state) => state.dogs); //mapstpatoprops
  const allTemperaments = useSelector((state) => state.temperaments); //mapstpatoprops
  console.log('yo soy temperamentos del home vengo del reducer', allTemperaments)
 /*  const [temps, setTemps] = useState('All') */
  const [force, setForce] = useState('');
  const [order, setOrder] = useState('');
  const [temps, setTemps] = useState('All')
  const [weight, setWeight] = useState('Default')
  const [currentPage, setCurrentPage]=useState(1)//primer pagina actual
  const[dogsPerPage,setDogsPerPage]=useState(8)//cuantas razas  por pagina 
  const indexOfLastDogs = currentPage * dogsPerPage; //15
  const indexOfFirstDogs = indexOfLastDogs - dogsPerPage; //0
  const currentDogs = allDogs.slice(
    indexOfFirstDogs,
    indexOfLastDogs
  );
  /* const length = allDogs?.length; */
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


function handleOrderByBreeds(e) {
  e.preventDefault();
  dispatch(OrderByBreeds(e.target.value))
  setOrder(`Ordenado ${e.target.value}`)
};



function handleFilterCreated(e) {
  dispatch(filterCreated(e.target.value))
  
};

function handleOrderByWeighTMin(e) {
  console.log('y ordenado por peso minimo', e.target.value)
  dispatch( OrderByWeigh_Max_to_Min(e.target.value))
  e.preventDefault();
  setWeight(`Ordenado ${e.target.value}`)
  
};

function handleTemps(e){
console.log('yo soy temperamentos, e target.value', e.target.value)
  setTemps(e.target.value)
  dispatch(filterByTemperaments(e.target.value))

}

/*https://github.com/any-18/PI-Pokemon/blob/main/client/src/components/Home/index.jsx*/

return(
  <div>
    <Link  to ='/create'><button>Create Dog Breeds</button></Link>
    <h1>DOGS BREEDS</h1>
    <button onClick={e=>{handleClick(e)}}>Reload all Dog Breeds</button>
   
    <select onChange={e=> handleOrderByBreeds(e)}>
        <option>Order By Raza:</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
    </select>
    <select  onChange={e=> handleOrderByWeighTMin(e)}>
        <option>Order By Weight_Min:</option>
        <option value="Default">Default</option>
                <option value="asc">weight_min</option>
                
                
    </select>

    <select onChange={e=>handleFilterCreated(e)}>
                <option value='All'>All Dogs</option>
                <option value='Created'>My Dogs</option>
                <option value='Api'>Api Dogs</option>
            </select>


    <select name ="temps"onChange={e=>handleTemps(e)}>
  
        <option value="All">All</option>
         {allTemperaments.map(g => <option key={g.name} value={g.name}>{g.name}</option>)} 
            
         </select>       
          
                
   

  




     
    <div>
    <Paginado 
     dogsPerPage={dogsPerPage}
     allDogs={allDogs.length}
    paginado={paginado}/>

    
     <SearchBar/>   
   
    { currentDogs?.map((el)=>{
       return(
       <Link to={'/home'+el.id} key={el.id}>
         <div className="card-container ">
      <Card    name={el.name} img={el.img? el.img:el.image} temperament={el.temperament} weight_min={el.weight_min} weight_max={el.weight_max}/>
      </div>
      </Link>)
      })}
      
      </div>
      </div>

)
    }