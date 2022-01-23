const axios = require("axios");
const { API_KEY } = process.env;
const{Temperament,Dog}=require('../db')


//mapeo para que solo me venga la info que necesito de la Api y formateo para que lleguen
async function getAllDataAPI() {
  // Trae toda la data
  let allData = await axios.get(
    `https://api.thedogapi.com/v1/breeds?api_key=${API_KEY}`
  );
  allData = allData.data.map((e) => {
    return {
      id: e.id,
      name: e.name,
      height_max:
      e.height.metric.split(" - ")[1] && e.height.metric.split(" - ")[1],//convierto height en un array
      height_min:
      e.height.metric.split(" - ")[0] && e.height.metric.split(" - ")[0],
      weight_max:
      e.weight.metric.split(" - ")[1] && e.weight.metric.split(" - ")[1],//convierto weight en un array
      weight_min:
      e.weight.metric.split(" - ")[0] !== "NaN"
        ? e.weight.metric.split(" - ")[0]
        : 6,
       life_span:e.life_span,
        Temperament: e.temperament
         ? e.temperament
         : " Perrito sin Temperamentos ",
       img: e.image.url,
         created:e.created
    };
  });

  return allData;
}


async function getAllTemperament() {
  // devuelvo solo los temperamentos
  let allData = await getAllDataAPI();//recibo los temperamentos desde la api
  let temperamentList = allData.map((el) => {
    return el.temperament;
  });

  let tempsList= temperamentList.map((el) => {
      if (el == null) return "";
          return el.split(", ");//devueelve un solo array con todos los elementos
    })
    .flat();

  let res = tempsList.sort();

  let temperamentDobles = [];

  res.forEach((el) => {//seleccionando  los que estan repetidos
    if (temperamentDobles.indexOf(el) === -1) {
      temperamentDobles.push(el);
      
    }
  });
    return temperamentDobles;
}


module.exports = {
  getAllDataAPI,
  getAllTemperament,
};