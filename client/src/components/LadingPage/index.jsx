import React from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function LandingPage() {

    return (



        <div className="principal">
            <div>
                <h1 className="hladingp">BREEDS DOGS</h1><br/>
                <br/><br/><br/><br/><br/><br/><br/>

                <p className="ptexto">Quieres tener un  perro, pero no estás seguro de cuál es la raza adecuada para ti y tu familia? ¡Pues tenemos grandes noticias! Nuestra Biblioteca de razas te ayudará a comprender las distintas razas y a decidir qué tipo de perro podría ser tu mascota ideal. Para cada raza verás la estaura, peso y la personalidad, y el promedio de vida </p>
            </div>
            <div>
                <Link to="/home">
                    <button className="buts">Get into</button>
                </Link>
            </div>
        </div>
    )
}   /* 

M1	            	M2		M3	    	                    M4 + Proyecto individual		                    Proy Final	
Inicio	        Checkpoint	Inicio	    Checkpoint	Inicio	Checkpoint	    Inicio	    Entrega	    Inicio  	Entrega
/* 22/11/2021	3/12/2021	6/12/2021	7/1/2022	10/1/2022	21/1/2022	24/1/2022	18/2/2022	21/2/2022	25/3/2022  */