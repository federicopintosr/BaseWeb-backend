module.exports = (sequelize, Sequelize) => {
    const Category = sequelize.define("category", {   
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
  
    return Category;
  };