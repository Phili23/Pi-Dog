const { Router } = require('express');
const axios=require('axios')
const router = Router();
const{Temperament}=require('../db')
const { API_KEY } = process.env;


 router.get('/', async(req, res,next) => {
    const busca=await Temperament.findAll()
    console.log("YO SOY TEMPERAMENT",busca)
    try {
        if(busca){
                res.send(busca)

            }else{
                res.json({message:"error"})
            }
        } catch (error) {
            next (error)
        }        
    })



  module.exports = router;