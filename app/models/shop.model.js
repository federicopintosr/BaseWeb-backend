module.exports = (sequelize, Sequelize) => {
  const Shop = sequelize.define("shop", {   
    tittle: {
      type: Sequelize.STRING
    },
    description: {
      type: Sequelize.STRING
    },
    published: {
      type: Sequelize.BOOLEAN
    }
  });

  return Shop;
};
