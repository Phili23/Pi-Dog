import React from "react";
import { Link } from "react-router-dom";
import './index.css'

export default function LandingPage(){

    return(
        <div className="">
        <span className="">
        <h1 className="h1">DOG BREEDS</h1></span>
        <Link to='/home'>
        <button className="but">GET INTO</button>

        </Link>

        </div>
    )
}