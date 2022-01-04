const { Router } = require('express');
const axios=require('axios')
const router = Router();
const{Temperament}=require('../db')
const { API_KEY } = process.env;

router.get("/", async (req, res) => {
    try {
      
    const allTemperaments = await Temperament.findAll();
    console.log("antes del if", allTemperaments.length);
    if (allTemperaments.length === 0) {
      console.log("entre");
      const temperamentsApi = await axios.get(
        `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
      );
      
      const temperaments = temperamentsApi.data.map((e) => {
        const todos = e.temperament;
     //console.log('esos son los temperamentos', todos)
        return todos;
      });
      const sinEspacios = temperaments.forEach((e) => e && e.split(", ")) // intera en los array y devuelve un solo array con todos los elementos
      //const sinRepetidos = sinEspacios.sort();
      console.log('sin repetidos', sinEspacios)
      
      console.log( sinRepetidos);
      var aux = sinRepetidos
        .map((e) => {
          return {
            name: e,
          };
        })
        .filter((e) => e.name);
      const todos = await Temperament.bulkCreate(aux); //recibe un arreglo con objetos y asigna a mi tabla segun la propiedad el valor
      return res.send(todos);
    } else {
      console.log("estoy en else");
      return res.send(allTemperaments);
    }
  } catch (error) {
    console.log("Se encontro un Error en get /temperaments", error)
  }
});
  module.exports = router;