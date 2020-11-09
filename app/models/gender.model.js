module.exports = (sequelize, Sequelize) => {
    const Gender = sequelize.define("gender", {   
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      nombre_corto: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Gender;
  };