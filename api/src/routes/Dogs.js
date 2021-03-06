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
        heigh_max: e.height.metric.split(" - ")[1] && e.height.metric.split(" - ")[1],
        height_min:
        e.height.metric.split(" - ")[0] && e.height.metric.split(" - ")[0],//me devuelve un array de string
        weight_max:
        e.weight.metric.split(" - ")[1] && e.weight.metric.split(" - ")[1],
        weight_min:
        e.weight.metric.split(" - ")[0] !== "NaN"
          ? e.weight.metric.split(" - ")[0]
          : 6,
          life_span:e.life_span, 
          Temperament: e.temperament
           ? e.temperament
           : " Perrito sin Temperamentos ",
         img: e.image.url,
                 //      temperaments: e.temperament && e.temperament.split(", ")
       };
     });
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


  // aqui la informacion de todos las razas
  const getAllDogs = async () => {
    try {
      const apiInfo = await getApiInfo();
      const dbInfo = await getDbInfo();
      const allInfo = apiInfo.concat(dbInfo);
      return allInfo;
    } catch (error) {
      console.log("Se encontro un error en getAllDogs", error)
    }
  };

/***********BUSQUEDA POR NAME y TODAS LAS RAZAS */
router.get('/',async(req,res)=>{
    try {
        const {name}=req.query;
        
        const dogsTotal=await getAllDogs();
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


/*********************************BUSQUEDA POR id**** */
      router.get('/:id', async(req, res,next) => {
        const { id } = req.params
           try {
            const dogId = await getAllDogs(id);
            
            let dogById =  dogId.filter(v => v.id == id)
             if (dogById.length > 0)
               return res.status(200).send(dogById);
             res.status(404).send('Raza no encontrada');
         } catch (error) {
             res.status(404).send('Raza no encontrada');
         }
     })

//RUTA PARA EDITAR
/* router.post('/delete/:name', async (req, res) => {


} *//* 
 
     router.post('/delete/:name', async (req, res) => {
      const { name } = req.params;
      console.log('Delete de: ', name)
      try {
       const elem = await Dog.destroy({
          where: {name: `${name}`}
       });
      } catch (error) {
          res.send(`Error in route /videogames/delete ${error}`);
      }
      res.send('Videogame has been deleted');
    }); */


/*eliminar una raza de la base dtos*/
    router.delete('/delete/:id', async (req, res) => {
      const { id } = req.params;
      console.log('Delete de: ', id)
      try {
         if(id){
         const allDog = await Dog.destroy({
          where: {id:id}
       })
       res.send('eliminado de la base de datos')
      }
      } catch (error) {
          res.send(`Error in route /Dog/delete ${error}`);
      }
     
    });



/*agregando una raza*/
  router.post('/', async (req, res) => {  
    const {
      name,
      height_min,
      height_max,
      weight_max,
      weight_min,
      life_span,
      temperament,
      img,
      created,
    } = req.body;
      const addDogs = await Dog.create({
      name,
      height_min,
      height_max,
      weight_max,
      weight_min,
      life_span,
      img,
      created,
    })

     
   const Dogs_Temperament = await Temperament.findAll({
       where:{name : temperament}
   })
   
   addDogs.addTemperament(Dogs_Temperament)

    res.send('New breeds has been added')
  }) 

module.exports = router;