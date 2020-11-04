module.exports = (sequelize, Sequelize) => {
    const Size = sequelize.define("size", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Size;
  };