module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      nombre: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Item;
  };
  