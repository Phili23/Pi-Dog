const axios = require("axios");
const { API_KEY } = process.env;
const{Temperament,Dog}=require('../db')
const{getAllTemperament}=require('../funciones/getTemperaments')

async function getAllDataAPI() {
  // Trae toda la data
  let allData = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  allData = allData.data.map((e) => {
    return {
          name: e.name,
         height:e.height,         
         weight:e.weight,
         life_span:e.life_span,
          temperament: e.temperament
           ? e.temperament
           : "🐶 Perrito sin Temperamentos 😭",
         img: e.image.url,
         created:e.created
    };
  });

  return allData;
}


async function getAllTemperament() {
  // devuelvo solo los temperamentos
  let allData = await getAllDataAPI();
  let temperamentList = allData.map((el) => {
    return el.temperament;
  });

  let procesado = temperamentList
    .map((el) => {
      if (el == null) return "";

      return el.split(", ");
    })
    .flat();

  let res = procesado.sort();

  let temperamentSinRepetir = [];

  res.forEach((el) => {
    if (temperamentSinRepetir.indexOf(el) === -1) {
      temperamentSinRepetir.push(el);
      
    }
  });
    return temperamentSinRepetir;
}


const bubbleSort = arr => {
    let allData = await getAllDataAPI();
    let temperamentList = allData.map((el) => {
        return{
             weight_min:el.weight_min,
             weight_max:el.weight_max,
    }});
    const l =weight_min.length;
    
    for (let i = 0; i < l; i++ ) {
      for (let j = 0; j < l - 1 - i; j++ ) {
        if ( weight_min[ j ] > weight_min[ j + 1 ] ) {
          [ weight_min[ j ], weight_min[ j + 1 ] ] = [ weight_min[ j + 1 ], weight_min[ j ] ];
        }
      }
    }
  
    return weight_min;
  };

module.exports = {
  getAllDataAPI,
  getAllTemperament,
};