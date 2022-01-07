const { DataTypes,UUID,UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    height_min:{
      type:DataTypes.STRING,
      allowNull: false
    },
    height_max:{
      type:DataTypes.STRING,
      allowNull: false
    },
    weight_min:{
      type:DataTypes.STRING,
      allowNull: false
    },
    weight_max:{
      type:DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      defaultValue: "https://www.anipedia.net/imagenes/nombres-de-perros-800x375.jpg"
      
    },
    life_span: {
      type: DataTypes.STRING,
      
    }, 
     created: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
  }
      });
};