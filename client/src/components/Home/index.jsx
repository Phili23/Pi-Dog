import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDogs,nextPage,prevPage, filterCreated, OrderByBreeds,reset, byOrderLife, OrderByWeigh_Asc,OrderByHeight, filterByTemperaments, getTemperaments,deleteDog } from '../../redux/actions/index.js'
import { Link } from "react-router-dom"
import Card from "../Card/index.jsx";
import Paginado from "../Paginado/index.jsx";
import SearchBar from '../SearchBar/index'
import  DeleteDog  from "../DeleteDog/index";



import './index.css'



export default function Home() {

  //seteo el dispatch
  const dispatch = useDispatch(); //despachando las acciones

  const allDogs = useSelector((state) => state.dogs); //traigo los Dogs del estado

  const allTemperaments = useSelector((state) => state.temperaments);//traigo los temperaments del estado
  let currentPage1 = useSelector((state) => state.currentPage);
  /*  const [created, setCreated] = useState('All') */
  const [order, setOrder] = useState('');
  const [temps, setTemps] = useState('All')
  const [weight, setWeight] = useState('')
   const [currentPage, setCurrentPage] = useState(1)//primer pagina actual
  const [dogsPerPage, setDogsPerPage] = useState(8)//cuantas razas  por pagina 
  const indexOfLastDogs = currentPage * dogsPerPage; //15
  const indexOfFirstDogs = indexOfLastDogs - dogsPerPage; //0
  const currentDogs = allDogs.slice(
    indexOfFirstDogs,
    indexOfLastDogs
  );
    /*  const length = allDogs?.length;  */
    /* console.log('yo soy lenght',length) */
  const paginado = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  function nextPage(e){
    if (currentPage1 < allDogs.length) {
     console.log('yo soy paginado',indexOfLastDogs)
   console.log('yo soy currentPage',currentPage)
      dispatch(nextPage());
 }
}
 function prevPage(e){
  if(currentPage1>0 )
  dispatch(nextPage());
 } 
  //componentDimount
  //traaer los personajes cundo el componente se monta(llenar el estado con los Dogs)
  useEffect(() => {
    dispatch(getDogs()); //se pasa la accion
  }, [dispatch]);

  /* Para disparar la accion GetTemps , y llenar el estado con los temperamentos*/
  useEffect(() => {
    dispatch(getTemperaments()); //se pasa la accion
  }, [dispatch]);


  function handleClick(e) {
    e.preventDefault();
    dispatch(getDogs())
    setCurrentPage(1)
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

  /// //fordenar por estatura
  function handleOrderByHeight(e) {
    e.preventDefault();
    setCurrentPage(1)
    dispatch(OrderByHeight(e.target.value))
    setOrder(`Ordenado ${e.target.value}`)
  };

  //funcion para ordenar por peso minimo
  function handleOrderByWeigh_min(e) {
     console.log('y ordenado por peso minimo', e.target.value)
    dispatch(OrderByWeigh_Asc(e.target.value)) 
    e.preventDefault();
    setCurrentPage(1)
      setWeight(`Ordenado ${e.target.value}`)
  }

  function handleOrderByLife(e) {
    console.log('y ordenado por life minimo', e.target.value)
   /*  if( e.target.value==='Asc'){ */
     dispatch(byOrderLife(e.target.value)) 
    e.preventDefault();
    setCurrentPage(1)
    setOrder(`Filtrado ${e.target.value}`)
    
  }

   // funcion para filtrar por temperamentos
  function handleFilterTemps(e) {
    console.log('Temps e target.value', e.target.value)
    setCurrentPage(1)
    dispatch(filterByTemperaments(e.target.value))
    setTemps(`Filtrado ${e.target.value}`)

  }
  function handleDeleteDog(e) {
    console.log('Temps e target.value', e.target.value)
    setCurrentPage(1)
    dispatch(deleteDog(e.target.value))
    setTemps(`Filtrado ${e.target.value}`)

  }
  


  function reiniciar() {
    dispatch(reset());
  }
    return (
    <div className="aline">
      <span className="titulos2">    <Link to='/'><button>Main - Page</button></Link>
        <Link to='/create'><button >Create Dog Breed</button></Link>
        <Link to='/delete'><button >Delete Dog Breed</button></Link></span>
      <h1 className='title-cards'> DOGS BREEDS</h1>
      <button className='titulos' onClick={e => { handleClick(e) }}>Reload all Dog Breeds</button>

      <select className='titulos' value={order} onChange={e => handleOrderByBreeds(e)}>
        <option value="" > Order ..By Breeds</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>

      <select className='titulos' value={weight} onChange={e => handleOrderByWeigh_min(e)} >
        <option value="" >Order Weight Asc-Desc..</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>

      <select className='titulos' value={order} onChange={e => handleOrderByHeight(e)}>
        <option value="x" > Order Height Asc-Desc</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
        {/* <option value="Desc">Descendente</option> */}
      </select>

      <select className='titulos' value={order} onChange={e => handleOrderByLife(e)}>
        <option value="" > Order Life_span</option>
        <option value="Asc">Ascendente</option>
        <option value="Desc">Descendente</option>
      </select>

           <select className='titulos' value={order} onChange={e => handleFilterCreated(e)}>
        <option >Filter By Origin</option>
        <option value='All'>All Dogs</option>
        <option value='created'>My Dogs</option>
        <option value='Api'>Api Dogs</option>
      </select>

      <select className="titulos" value={temps} onChange={e => handleFilterTemps(e)}>
        <option value='All'>Filter By Temperaments</option>
        {allTemperaments.sort().map((g, el) => <option key={el.id} value={g.name}>{g.name}</option>)}
      </select>

      {/* paginado, lo paso  x props*/}
      <Paginado
        dogsPerPage={dogsPerPage}
        allDogs={allDogs.length}
        paginado={paginado} />
        <span className="titulos">
        <button  onClick={e =>  prevPage(e)}>Anterior</button>
        <button  onClick={e =>  nextPage(e)}>Siguientes</button>
        </span> 
      <SearchBar />
     
      <br />
      <br />
      {/*  razas - Cards(paginadas) - x cada card renderiza un Dog */}
      <div className='card-container12s'>

        {
          currentDogs?.map((el, index) => {
            return (
              <div className='containers' >
                <Link to={'/home' + el.id}  >
                  <Card 
                   id={el.id}
                    name={el.name}
                    img={el.img ? el.img : el.image}
                    /*  temperament={el.temperament}  */
                    weight_min={el.weight_min}
                    weight_max={el.weight_max}
                    height_min={el.height_min}
                    heigh_max={el.heigh_max}
                    life_span={el.life_span}
                    created={el.created}
                    key={el.id}
                    temperaments=
                    {!currentDogs[0].created ? currentDogs[0].Temperament + ' - ' : currentDogs[0].temperaments.map((t) => t.name + ('  '))}
                  />
                 
                </Link>
                {/* <button onClick={e => { handleDeleteDog(e) }}>Delete</button>  <button>Update</button> */}
              </div>

            )

          })}

      </div>

    </div>

  )
}