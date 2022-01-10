const { Router } = require('express');
const axios=require('axios')
const router = Router();
const{Temperament,Op}=require('../db')
const { API_KEY } = process.env;

 router.get('/', async(req, res,next) => {
    const busca=await Temperament.findAll()
    console.log("YO SOY TEMPERAMENT",busca)
    try {
        if(busca){
                res.send(busca)

            }else{
                res.json.parse({message:"error"})
            }
        } catch (error) {
            next (error)
        }        
    }) 


 /*    router.get("/", async (req, res)=>{
        //Obtener todos los temperamentos posibles
        // En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
    const temp=await Temperament.findAll()
    tempe = temp.map(e => e.name)
        return tempe
        
      }); */
  module.exports = router;