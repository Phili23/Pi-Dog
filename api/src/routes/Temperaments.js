const { Router } = require('express');
const axios=require('axios')
const router = Router();
const{Temperament}=require('../db')
const { API_KEY } = process.env;


/* router.get('/', async(req, res,next) => {
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
 */


  module.exports = router;