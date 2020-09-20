module.exports = app => {
  const shops = require("../controllers/shop.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  //router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/getall", shops.findAll);

  app.use("/api/shops", router);
};
