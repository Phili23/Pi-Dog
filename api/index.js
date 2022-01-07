//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require("./src/app.js");
const { conn,Temperament } = require("./src/db.js");
const services = require("./src/funciones/getTemperaments");


// Syncing all the models at once.
conn.sync({ force: false }).then(async () => {
  console.log(" Base de datos conectada ");
  // SE PRECARGAN LOS TEMPERAMENTOS EN BASE DE DATOS (DESDE LA API)
 // console.log(" Precargando Temperamentos de API en DB... ");
  let temperamentForAPI = await services.getAllTemperament();
  //console.log('temperamentos, de la db',temperamentForAPI)
  // se crea objeto para usar bulkCreate
  var objTemperamentos = temperamentForAPI
    .map((e) => {
      return {
        name: e,
      };
    })
    .filter((e) => e.name);
  //Se guardan en BD todos los temperamentos
  await Temperament.bulkCreate(objTemperamentos); //recibe un arreglo con objetos y asigna a mi tabla segun la propiedad el valor

  server.listen(3001, () => {
    console.log('Listening at 3001') // eslint-disable-line no-console
  })
})