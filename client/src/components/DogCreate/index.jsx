import React, { useState, useEffect } from 'react'
import { Link, useHistory,useParams } from 'react-router-dom'
import { postDogs, getTemperaments, deleteDog } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux'
import './index.css'



function validate(input) {
    let errors = {};


    if (!input.name || !/^[A-Z]+[A-Za-z0-9\s]+$/g.test(input.name)) {
        errors.name = 'Ingresa la Primera letra Mayuscula, Unicamente Letras y Numeros ';
    } else if (!input.height_min || !/^[1-9]\d*(\.\d+)?$/.test(input.height_min)) {
        errors.height_min = 'Valor Min tiene que ser numerico no se permite coma';
    } else
        if (!input.height_max || !/^[1-9]\d*(\.\d+)?$/.test(input.height_max)) {
            errors.height_max = 'Valor Max tiene que ser numerico no se permite coma';
        } else
            if (input.height_max <= input.height_min) {
                errors.height_min = 'Min no puede ser Mayor o Igual que Max';
            } else

                if (!input.weight_min || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_min)) {
                    errors.weight_min = 'El valor Min tiene que ser numerico no se permite coma';
                } else
                    if (!input.weight_max || !/^[1-9]\d*(\.\d+)?$/.test(input.weight_max)) {
                        errors.weight_max = 'El valor Max tiene que ser numerico no se permite coma ';
                    } else
                        if (input.weight_max <= input.weight_min) {
                            errors.weight_min = 'Min no puede ser Mayor o Igual que Max';
                        } else
                            if (!input.life_span || !/^[1-9]\d*(\.\d+)?$/.test(input.life_time_max)) {
                                errors.life_span = 'Life Span debe ser completado su valor numerico';
                            }
                            else
                                if (input.img && !/[a-z0-9-.]+\.[a-z]{2,4}\/?([^\s<>#%",{}\\|^[\]`]+)?$/.test(input.img)) {
                                    errors.img = 'Debe ser una URL o estar vacio para tomar una Imagen por Defecto';
                                } else
                                    if (input.temperament.length < 0) {
                                        errors.temperament = 'Seleccione minimo un  temperamento ';

                                    }
    return errors
}


export default function DogCreate(props) {
    const dispatch = useDispatch();
    const {id} = useParams() 
    const history = useHistory()//para redirigir a alguna ruta
    const temperaments = useSelector((state) => state.temperaments); //traigo los temps
    const [errors, setErrors] = useState({})//estado local para errores

    // creando un estado para guardar los estados y randerizar en el form
    const [input, setInput] = useState({ //estado local de 1 dog(es lo q se va a enviar)
        name: "",
        height_min: "",
        height_max: "",
        weight_min: "",
        weight_max: "",
        life_span: "",
        temperament: [],
        img: "",
    })

    function handleChange(e) {
        /*   e.preventDefault(); */
        setInput({
            ...input,
            [e.target.name]: e.target.value,
        })
        setErrors(validate({ ...input, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        dispatch(getTemperaments())
    }, [dispatch])



    /* de los temperamentos*/
    function handleSelectT(e) { // cada vez q  se agrega un temp
        e.preventDefault();
        setInput({
            ...input,
            temperament: [...input.temperament, e.target.value],/// este es el array vacio..le va a concatenar el targe.valu
        })
        setErrors(validate({
            ...input,
            [e.target.name]: e.target.value
        }))
    }


    //elimina una raza de la base de datios
    function handleDeletDog(e) { // cada vez q  se agrega un temp
        e.preventDefault();
        dispatch(deleteDog(id))
        //se despacha la accion
    }

    function handleSubmit(e) {
        e.preventDefault();
        /* console.log(input)*/
        if (Object.keys(errors).length === 0 && input.name !== "" && input.height_min !== "" && input.height_max !== "" && input.weight_min !== ""
            && input.weight_max !== "" && input.life_span !== "" && input.temperament.length !== 0)
            dispatch(postDogs(input))
        console.log(postDogs())
        alert("Created Breeds Dogs ")
        setInput({
            name: "",
            height_min: "",
            height_max: "",
            weight_min: "",
            weight_max: "",
            life_span: "",
            temperament: [],
            img: "",
        })
        //limpiar campos
        e.target.reset();
        history.push('./home')//redirije a una direccion
    }

     function handleDelete(el) {  // para borrar un temp ya agregado
        setInput({
            ...input,
            temperament: input.temperament.filter((t) => t !== el)
        });
    }


    return (
        < span>
            <div className=''>
                <br />
                <Link className="posButt" to='/home'><button className='titulos2'>Back-Home</button></Link>
                <h1 className="title-cardCreate">Create Breeds Dogs</h1>
                <form className="form" onSubmit={(e) => { handleSubmit(e) }}>
                    <div className="contenedores">
                        <label className="style">Name</label>
                        <input className=''
                            type="text"
                            value={input.name}
                            name="name"
                            placeholder='name'
                            onChange={(e) => { handleChange(e) }} />

                    </div>
                    {
                        errors.name && (<p className='error'>{errors.name}</p>)}


                    <div className="contenedores">
                        <label className="headers">Height_Min  </label>
                        <input
                            type="number"
                            value={input.height_min}
                            name='height_min'
                            /*  placeholder='Cms..' */
                            placeholder="00-90 (Cms: Altura min-Altura max)"
                            /*   pattern="[0-9]{1,2}[-][0-9]{1,2}" */
                            onChange={(e) => { handleChange(e) }} className="itemsp" required />


                    </div>
                    {errors.height_min && (<p className='error'> {errors.height} </p>)}


                    <div className="contenedores">
                        <label className="headers">height_Max  </label>
                        <input
                            type="number"
                            value={input.height_max}
                            name='height_max'
                            placeholder='Cms..'
                            /*  pattern="[0-9]{1,2}[-][0-9]{1,2}" */
                            /*     title="only numbers, allowed format: ej: 0-90  " */
                            onChange={(e) => { handleChange(e) }} className="itemsp" required />


                    </div>
                    {errors.height_max && (<p className='error'> {errors.height} </p>)}


                    <div className="contenedores">
                        <label className="headers">Weight_Min  </label>
                        <input
                            type="number"
                            value={input.weight_min}
                            name='weight_min'
                            placeholder='kilogramns..'
                            /*  pattern="[0-9]{1,2}[-][0-9]{1,2}" */
                            title="only numbers, allowed format: ej: 0-90  "
                            onChange={(e) => { handleChange(e) }} className="itemsp" required />


                    </div>
                    {errors.weight_min && (<p className='error' > {errors.weight_min} </p>)}

                    <div className="contenedores">
                        <label className="headers">Weight_Max  </label>
                        <input
                            type="number"
                            value={input.weight_max}
                            name='weight_max'
                            placeholder='kilogramns..'
                            /*  pattern="[0-9]{1,2}[-][0-9]{1,2}" */
                            /*  title="only numbers, allowed format: ej: 0-90  " */
                            onChange={(e) => { handleChange(e) }} className="itemsp" required />

                    </div>
                    {errors.weight_max && (<p className='error' > {errors.weight_max} </p>)}


                    <div className="contenedores">
                        <label className="headers">Life_Span  </label>
                        <input
                            type="number"
                            value={input.life_span}
                            name='life_span'
                            placeholder='Years Life..'
                            /*     pattern="[0-9]{1,2}" */
                            onChange={(e) => { handleChange(e) }} className="itemsp" required />
                    </div>
                    {
                        errors.life_span && (<p className='error' > {errors.life_span} </p>)}


                    <div className="contenedores">
                        <label className="headers">Image  </label>
                        <input
                            type="text"
                            value={input.img}
                            name='img'
                            placeholder='url...'
                            onChange={(e) => { handleChange(e) }} className="itemsp" required />
                    </div>

                     <div className="contenedores">
                        <label className="headers">Temperaments  </label>
                        <select onChange={(e) => handleSelectT(e)} className="itemsp1" required>
                            <option >All Temperaments</option>
                            {temperaments.map((temp, item) => (
                                
                                <option value={temp.name}  >{temp.name}</option>
                               ))}

                            {errors.temperament && (<p className='error' > {errors.temperaments} </p>)}
                        </select>
                    </div> 


                    <span className="contenedores">

                        <button /* className="titulos" */ type='submit' className="butt">Created Breeds Dogs</button>
                      <button    type='submit' className="butt"   onClick={() => handleDeletDog()}>Delete Breeds Dogs</button> 
                    </span>

                    
                </form>

                {input.temperament.map((el) =>
                    <div className="headers" key={el.id}  >
                        <p>{el}</p>
                        <button className="btn5" onClick={() => handleDelete(el)}>X</button>
                    </div>
                )}

            </div>


        </span>
    )
}