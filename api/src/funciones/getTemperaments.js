
const axios = require("axios");
const { API_KEY } = process.env;
const{Temperament,Dog}=require('../db')

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
console.log('aqui todos los datos', allData)
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
  console.log('estos son los temperamentos sin repetir',temperamentSinRepetir)
  return temperamentSinRepetir;
}

module.exports = {
  getAllDataAPI,
  getAllTemperament,
};