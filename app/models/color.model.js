module.exports = (sequelize, Sequelize) => {
    const Color = sequelize.define("color", {
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      }
    });
  
    return Color;
  };