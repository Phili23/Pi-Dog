import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,filterCreated, OrderByBreeds, OrderByWeigh} from '../../redux/actions/index.js'
import {Link} from "react-router-dom"
import Card from "../Card/index.jsx";
import Paginado from "../Paginado/index.jsx";
import SearchBar from "../SearchBar/index.js";


export default function Home() {
  const dispatch = useDispatch(); //despachando las acciones
  const allDogs = useSelector((state) => state.dogs); //mapstpatoprops
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

function handleClick(e){
  e.preventDefault();
  dispatch(getDogs())
  //se despacha la accion
}

function handleFilterCreated(e) {
  dispatch(filterCreated(e.target.value))
  
};


function handleOrderByBreeds(e) {
  dispatch( OrderByBreeds(e.target.value))
  
};

function handleOrderByWeigh(e) {
  dispatch( OrderByWeigh(e.target.value))
  console.log(OrderByWeigh())
  
};

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
    <select  onChange={e=> handleOrderByWeigh(e)}>
        <option>Order By:Weight</option>
                <option value="asc">Ascendente</option>
                <option value="desc">Descendente</option>
                
    </select>
    <select onChange={e=>handleFilterCreated(e)}>
        <option>Filter by:  </option>
                <option value="all">All</option>
                <option value="created">Created</option>
                <option value="api">Api</option>
                
    </select>
    <select>
        <option>Filter By:Temperament  </option>
        <option value="temperament">Temperament</option>
    </select>
    <div>
    <Paginado 
     dogsPerPage={dogsPerPage}
     allDogs={allDogs.length}
    paginado={paginado}/>

    <SearchBar/>    

    { currentDogs?.map((el)=>{
       return(
       <Link to={'/home'+el.id}>
      <Card   name={el.name}image={el.image} temperament={el.temperament} weight={el.weight}/>
      </Link>)
      })}
      </div>
      </div>

)
    }