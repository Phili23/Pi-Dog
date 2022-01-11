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

  /*  router.get('/', async(req, res,next) => {
    let array
    try {

        let temperaments = await Temperament.findAll();
        console.log('yo soy array', temperaments)
        if(temperaments){
            array =  temps.split(',')
         }
         console.log('yo soy array', array)
         res.send(array)
                    
      } catch (error) {
        next("Rompio el get Temperament >  ");
      }
    });    */


/*      router.get("/", async (req, res)=>{
        let traertemperamentos = await Temperament.findAll()
        traertemperamentos = JSON.stringify(traertemperamentos, null, 2) 
        traertemperamentos = JSON.parse(traertemperamentos)
        if(traertemperamentos.length !== 0) {
            res.send(traertemperamentos) 
        } else {
         axios.get("https://api.thedogapi.com/v1/breeds") 
         .then(async respuesta => {
             let temperamentosfinal = []
             let temperamentos = respuesta.data.map((el) => el.temperament) 
             let nuevostemperamentos = temperamentos.map((el) => el && el.split(",")).flat()
             nuevostemperamentos.forEach((el) => {
                 if(temperamentosfinal.indexOf(el) < 0) temperamentosfinal.push(el)
             })
             for (let i = 0; i < 5; i++) {
                 await Temperament.create({
                     name: temperamentosfinal[i]
                 }) 
             }
             res.send(temperamentosfinal.slice(9, 19))
         }) 
         .catch(error => {
             console.log(error)
         })           
        } 
 }) */
/* 
 router.get('/tempe', async (req, res) => {
    try{
        const tempe = req.params.tempe;
        let temperamentDogs;
    
        let dataIntermediate = await Temperament.findAll({
            include: {model: Dog}
        });

        for(let i = 0; i < 124; i++){
            if(dataIntermediate[i].temperament === tempe){
                temperamentDogs = dataIntermediate[i].dogs;
            }
        }
        
        let resultsApi = await axios.get(`https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`);

        let resultsTempe = resultsApi.data.filter(x => x.temperament !== undefined);

        let resultsFil = resultsTempe.filter(x => x.temperament.includes(tempe));

        let resultsApiDb = temperamentDogs.concat(resultsFil);
        
        res.send(resultsApiDb);
    }
    catch (error){
        res.status(404);
    }
}) */


router.get('/', async(req, res,next) => {
    let temp = await Temperament.findAll({raw: true, where: { name:{ [Op.like]: `%${temperament}%` } } })
    temp = temp.map(e => e.id)
    return temp

}) 

  module.exports = router;