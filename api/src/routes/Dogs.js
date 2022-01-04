const { Router } = require('express');
const{Dog,Temperament}=require('../db')
const axios=require('axios')
const router = Router();

const { API_KEY } = process.env;





const getApiInfo = async () => {
    try {
      const apiUrl = await axios.get(
       `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
     );
     const apiInfo = await apiUrl.data.map((e) => {
       return {
        id: e.id,
        name: e.name,
         height:e.height,         
         weight:e.weight,
         life_span:e.life_span,
          temperament: e.temperament
           ? e.temperament
           : "🐶 Perrito sin Temperamentos 😭",
         img: e.image.url,
                 //      temperaments: e.temperament && e.temperament.split(", ")
       };
     });
      console.log("informacion de la api",apiInfo)
     return apiInfo;
    } catch (error) {
      console.log('Hubo un error en el getApiInfo',error)
    }
  };


  const getDbInfo = async () => {
    try {
      return await Dog.findAll({
        include: {
          model: Temperament,
          attributes: ['name'], //traigo el nombre de los temperamentos
          through: {
            attributes: [], //tomo solo lo que queda en el arreglo atributes
          },
        },
      });
    } catch (error) {
      console.log("Hubo un error en getDbInfo", error)
    }
  };

  const getAllDogs = async () => {
    try {
      const apiInfo = await getApiInfo();
      const dbInfo = await getDbInfo();
      const allInfo = apiInfo.concat(dbInfo);
      console.log(allInfo)
      return allInfo;
    } catch (error) {
      console.log("Se encontro un error en getAllDogs", error)
    }
  };


router.get('/',async(req,res)=>{
    try {
        const {name}=req.query;
        const dogsTotal=await getAllDogs();
        //console.log(recipesTotal)
        if(name){
          let dogsName=await dogsTotal.filter(e=>e.name.toLowerCase().includes(name.toLowerCase()))
          dogsName.length? 
          res.status(200).send(dogsName):
          res.status(404).send("Lo siento, no se encontro el Perrito Buscado");
           }  
           else{
             
               res.status(200).send(dogsTotal)
              }; 
    } catch (error) {
        console.log("Se encontro una falla en el get /dogs", error)
    }
   
          
      });



      router.get('/:id', async(req, res,next) => {
        const { id } = req.params
           try {
            const dogId = await getAllDogs(id);
            
            let dogById =  dogId.filter(v => v.id == id)
             if (dogById.length > 0)
             console.log(dogById)
              return res.status(200).send(dogById);
             res.status(404).send('Raza no encontrada');
         } catch (error) {
             res.status(404).send('Raza no encontrada');
         }
     })


     router.post("/dogs", async (req, res) => {
      try{
    
        const {
          name, height,weight,life_span,temperament,image
                 //      temperaments: e.temperament && e.temperament.split(", ")
        } = req.body;
      
        let dogCreated = await Dog.create({
          name, 
          height,
          weight,
          life_span,
          image,
          created,
        });
      
        let temperamentDb = await Temperament.findAll({
          where: { name: temperament },
        });
        await dogCreated.addTemperament(temperamentDb); // se agrega el await para esperar que se encuentren los temperaments
        res.send("El Perrito ha sido creado con exito");
      }
      catch(error){
        console.log("Se presento un error en el Post", error)
      }
    });
module.exports = router;