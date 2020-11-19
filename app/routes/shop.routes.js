module.exports = app => {
  const shops = require("../controllers/shop.controller.js");
  const products = require("../controllers/product.controller.js");

  var router = require("express").Router();

  //Retrieve all Tutorials
  router.get("/getall", shops.findAll);

  //Retrieve Slides
  router.get("/getSlides", shops.FindSlides);

  //Retrieve Arrivals
  router.get("/getArrivals", shops.FindArrivals);

  //Retrieve Menus
  router.get("/getMenu", shops.FindMenu);

   //Get Product
   router.get("/getProducts", products.GetProducts);

   //Retorna productos segun codigo general
   router.get("/getProductsByCode", products.GetProductCode);

   //Retorna stock y precio de un producto especifico
   router.get("/getStockByCode", products.GetStockByCode);

   //Retorna todos los productos que sean resultado de la busqueda
   router.get("/getProductBySearch", products.GetProductBySearch);
   
  app.use("/api/shops", router);
};
