const db = require("../models");
const Shop = db.shops;
const Op = db.Sequelize.Op;


// Retrieve all Shop from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  var items = any;

  Shop.findAll({ where: condition })
    .then(data => {
        res.send(data);     
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving shops."
      });
    });
};
