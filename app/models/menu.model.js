module.exports = (sequelize, Sequelize) => {
    const Menu = sequelize.define("menu", {   
      position: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      url: {
        type: Sequelize.STRING
      },
      father: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      finish: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Menu;
  };
  