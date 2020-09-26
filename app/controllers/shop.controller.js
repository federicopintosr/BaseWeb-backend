const db = require("../models");
const Shop = db.shops;
const Slide = db.slides;
const Menu = db.menu;
const Op = db.Sequelize.Op;


// Retrieve all Shop from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Shop.findAll({ where: condition })
    .then(data=> {
        res.send(data);     
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shops."
      });
    });
};

//Buscar Slides
exports.FindSlides = (req, res) => {
  const name = req.query.name;

  Slide.findAll({
    where: {name: name, status : 'V'}, 
    attributes: ['image'],
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


//Buscar Slides
exports.FindMenu = (req, res) => {
  const name = req.query.name;

  Menu.findAll({
    where: {name: name, status : 'V'}, 
    attributes: ['description','url','position','father'],
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