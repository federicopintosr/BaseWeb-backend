module.exports = (sequelize, Sequelize) => {
    const Feature = sequelize.define("feature", {   
      cod_producto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      descripcion: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Feature;
  };