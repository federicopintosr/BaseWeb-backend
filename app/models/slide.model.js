module.exports = (sequelize, Sequelize) => {
    const Slide = sequelize.define("slide", {   
      position: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
  
    return Slide;
  };
  