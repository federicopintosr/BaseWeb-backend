module.exports = (sequelize, Sequelize) => {
    const Product = sequelize.define("product", {   
      codigo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      cod_proveedor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cantidad: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      nombre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      marca: {
        type: Sequelize.STRING,
        allowNull: true
      },
      descripcion_corta: {
        type: Sequelize.STRING,
        allowNull: true
      },
      descripcion_larga: {
        type: Sequelize.STRING,
        allowNull: true
      },
      categoria: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      genero: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      image: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      talle: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      color: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      precio: {
        type: Sequelize.DOUBLE,
        allowNull: false
      },
      peso: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      estado: {
        type: Sequelize.STRING,
        allowNull: true
      }
    });
  
    return Product;
  };