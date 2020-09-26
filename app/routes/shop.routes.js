module.exports = app => {
  const shops = require("../controllers/shop.controller.js");

  var router = require("express").Router();

  //Retrieve all Tutorials
  router.get("/getall", shops.findAll);

  //Retrieve Slides
  router.get("/getSlides", shops.FindSlides);

  //Retrieve Slides
  router.get("/getMenu", shops.FindMenu);

  app.use("/api/shops", router);
};
