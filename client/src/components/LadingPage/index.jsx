import React from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function LandingPage(){

    return(
        <div className="body">
        <h1 className="h1">Bienvenidos a mi SuperPagina de Dogs</h1>
        <Link to='/home'>
        <button className="but">Ingresar</button>

        </Link>

        </div>
    )
}