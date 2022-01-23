import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,filterCreated, OrderByBreeds, OrderByWeigh_Min_to_Max ,OrderByWeigh_Max_to_Min,filterByTemperaments, getTemperaments} from '../../redux/actions/index.js'
import {Link} from "react-router-dom"
import Card from "../Card/index.jsx";
import Paginado from "../Paginado/index.jsx";
import SearchBar from '../SearchBar/index'



import './index.css'



export default function Home() {

  //seteo el dispatch
  const dispatch = useDispatch(); //despachando las acciones

  const allDogs = useSelector((state) => state.dogs); //mapstpatoprops
  
  const allTemperaments = useSelector((state) => state.temperaments); //mapstpatoprops
  const [created, setCreated] = useState('All')
  const [order, setOrder] = useState('');
  const [temps, setTemps] = useState('All')
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

function handleFilterCreated(e) {
  e.preventDefault()
  dispatch(filterCreated(e.target.value))
  setCurrentPage(1)
  setOrder(`Ordenado ${e.target.value}`)
  };


function handleOrderByBreeds(e) {
  e.preventDefault();
  dispatch(OrderByBreeds(e.target.value))
  setOrder(`Ordenado ${e.target.value}`)
};


//funcion para ordenar por peso minimo
function handleOrderByWeigh_min(e) {
  console.log('y ordenado por peso minimo', e.target.value)
  dispatch(OrderByWeigh_Min_to_Max(e.target.value))
  e.preventDefault();
  setCurrentPage(1)
   const allDogs2 = allDogs.sort((a, b) => {
    if (Number(a.weight_min) > Number(b.weight_min)) return 1;
    if (Number(a.weight_min) < Number(b.weight_min)) return -1;
    return 0;
  });
  setWeight(`Ordenado ${e.target.value}`)
}

//funcion para ordenar por peso maximo
function handleOrderByWeigh_max(e) {
  dispatch(OrderByWeigh_Max_to_Min(e.target.value))
  e.preventDefault();
  setCurrentPage(1)
  const allDogs3 = allDogs.sort((b, a) => {
    if (Number(a.weight_min) > Number(b.weight_min)) return 1;
    if (Number(a.weight_min) < Number(b.weight_min)) return -1;
    return 0;
  });
  setWeightMax(`Ordenado ${e.target.value}`)

}

// funcion para filtrar por temperamentos
function handleFilterTemps(e){
console.log('Temps e target.value', e.target.value)
setCurrentPage(1)
  dispatch(filterByTemperaments(e.target.value)) 
  setTemps(`Filtrado ${e.target.value}`)
   
}

return(
  <div className="aline">
    <Link  to ='/'><button>Main - Page</button></Link>
    <Link   to ='/create'><button >Create Dog Breed</button></Link>
    <h1   className='title-card'> DOGS BREEDS</h1>
    <button     className='titulos' onClick={e=>{handleClick(e)}}>Reload all Dog Breeds</button>
   
    <select  className='titulos' value={order} onChange={e=>handleFilterCreated(e)}>
                <option >Filter By Origin</option>
                <option value='All'>All Dogs</option>
                <option value='created'>My Dogs</option>
                <option value='Api'>Api Dogs</option>
      </select>

    <select  className='titulos' value={order} onChange={e=> handleOrderByBreeds(e)}>
        <option value="" > Order ..By Breeds</option>
           <option value="asc">Ascendente</option>
           <option value="desc">Descendente</option>
    </select>

    <select  className='titulos'  value={weight}  onChange={e=>handleOrderByWeigh_min(e)} >
      <option value="Default">Order Weight...By Min</option>
      <option value="weight_min">Weight min</option>
     </select>


    <select  className="titulos" value={weightMax}  onChange={e=>handleOrderByWeigh_max(e)} >
        <option  value="x" >Order Weight..By Max</option>
        <option value="weight_min">Weight max</option>
    </select>
           
      <select  className="titulos"  value={temps} onChange={e=>handleFilterTemps(e)}>
            <option value='All'>Filter By Temperaments</option>
          {allTemperaments.sort().map(g => <option key={g.name} value={g.name}>{g.name}</option>)} 
    </select>   
            
   
    <Paginado 
     dogsPerPage={dogsPerPage}
     allDogs={allDogs.length}
    paginado={paginado}/>
<SearchBar/>   
   
     
    
     <br />
        <br />
     
        <div className ='card-container12s'>     
    { currentDogs?.map((el)=>{
       return(
        <div className='container-cards' >
       <Link to={'/home'+el.id} key={el.id}>
         {/* <div className="container-cards  "> */}
      <Card    name={el.name} img={el.img? el.img:el.image} temperament={el.temperament} weight_min={el.weight_min} weight_max={el.weight_max}
       temperaments={ !currentDogs[0].created? currentDogs[0].Temperament + ' - ' : currentDogs[0].temperaments.map(el=>el.name + ('  '))}/>
    
      </Link>
      </div>)
      })}
      
      </div>
     
    </div>
    
)
    }