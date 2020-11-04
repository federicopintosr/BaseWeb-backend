module.exports = (sequelize, Sequelize) => {
    const Image = sequelize.define("image", {   
      cod_producto: {
        type: Sequelize.STRING,
        allowNull: false
      },
      imagen: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Image;
  };