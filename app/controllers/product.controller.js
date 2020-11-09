const db = require("../models");
const Shop = db.shops;
const Color = db.colors;
const Feature = db.features;
const Image = db.images;
const Product = db.products;
const Size = db.sizes;
const Slide = db.slides;
const Op = db.Sequelize.Op;


exports.FindMenu = (req, res) => {
    const name = req.query.name;
  
    Menu.findAll({
      where: {name: name, status : 'V'}, 
      attributes: ['id','description','url','position','father','finish'],
      order: [['position', 'ASC']],
      })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };

  

  // Retrieve all Shop from the database.
exports.findAllProduct = (req, res) => {
    //const name = req.query.name;
  
    Product.findAll({
        where: {name: name, status : 'V'}, 
        attributes: ['id','description','url','position','father','finish'],
        order: [['position', 'ASC']],
        })
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving tutorials."
          });
        });
    };