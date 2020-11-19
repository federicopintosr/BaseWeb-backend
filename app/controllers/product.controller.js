const db = require("../models");
const Shop = db.shops;
const Color = db.colors;
const Feature = db.features;
const Image = db.images;
const Product = db.products;
const Size = db.sizes;
const Slide = db.slides;
const Op = db.Sequelize.Op;


exports.GetProducts = async (req, res) => {
    // get the beginning of the current month
    let products;
    // Use raw SQL queries to select all cars which belongs to the user
    products = await db.sequelize.query('select p.codigo as "Codigo Producto" , p.nombre as "Nombre Producto", p.marca as "Marca", p.descripcion_corta as "Corta", p.descripcion_larga as "Larga", c.nombre as "Categoria", g.nombre as "Genero", s.nombre as "Talle", p.precio as "Precio", p.peso as "Peso", co.nombre as "Color", i.imagen as "Imagen" from products p , categories c, images i, sizes s, colors co, genders g where p.categoria = c.id and p.talle = s.id and p.color = co.id and p.image = i.id and p.genero = g.id and p.talle = s.id', {
      //replacements: {id: req.user.id},
      type: db.sequelize.QueryTypes.SELECT
    });  
    const data = {
      productos: products
    };
    return res.status(200).json(data)

  }


  exports.GetProductCode = async (req, res) => {
    // get the beginning of the current month
    var codeRequests = req.query.code;
    var generalCode = codeRequests.substring(0, 10);

    // Use raw SQL queries to select all cars which belongs to the user
    //var select = 'select p.codigo as "Codigo Producto" , p.nombre as "Nombre Producto",' + ' p.marca as "Marca", p.descripcion_corta as "Corta", p.descripcion_larga as "Larga", c.nombre as "Categoria", g.nombre as "Genero", s.nombre as "Talle", p.precio as "Precio", p.peso as "Peso", co.nombre as "Color", i.imagen as "Imagen" from products p , categories c, images i, sizes s, colors co, genders g where p.categoria = c.id and p.talle = s.id and p.color = co.id and p.image = i.id and p.genero = g.id and p.talle = s.id'
    var select = 'select p.codigo as "Codigo Producto" , p.nombre as "Nombre Producto", p.marca as "Marca", p.descripcion_corta as "Corta", p.descripcion_larga as "Larga", c.nombre as "Categoria", g.nombre as "Genero", s.nombre as "Talle", p.precio as "Precio", p.peso as "Peso", co.nombre as "Color", i.imagen as "Imagen" from products p , categories c, images i, sizes s, colors co, genders g where p.categoria = c.id and p.talle = s.id and p.color = co.id and p.image = i.id and p.genero = g.id and p.talle = s.id and substring(p.codigo,0,10) = \'' + generalCode +'\''
    products = await db.sequelize.query(select, {
    //replacements: {id: req.user.id},
    type: db.sequelize.QueryTypes.SELECT
    });  
    const data = {
      productos: products
    };
    return res.status(200).json(data)
    
  }

  exports.GetStockByCode = async (req, res) => {
    // get the beginning of the current month
    var codeRequests = req.query.code;

    // Use raw SQL queries to select all cars which belongs to the user
    //var select = 'select p.codigo as "Codigo Producto" , p.nombre as "Nombre Producto",' + ' p.marca as "Marca", p.descripcion_corta as "Corta", p.descripcion_larga as "Larga", c.nombre as "Categoria", g.nombre as "Genero", s.nombre as "Talle", p.precio as "Precio", p.peso as "Peso", co.nombre as "Color", i.imagen as "Imagen" from products p , categories c, images i, sizes s, colors co, genders g where p.categoria = c.id and p.talle = s.id and p.color = co.id and p.image = i.id and p.genero = g.id and p.talle = s.id'
    var select = 'select p.cantidad as "Stock", p.precio as "Precio" from products p where p.codigo = \'' + codeRequests +'\''
    products = await db.sequelize.query(select, {
    //replacements: {id: req.user.id},
    type: db.sequelize.QueryTypes.SELECT
    });  
    const data = {
      productos: products
    };
    return res.status(200).json(data)
    
  }

  exports.GetProductBySearch = async (req, res) => {
    // get the beginning of the current month
    var request = req.query.search;

    // Use raw SQL queries to select all cars which belongs to the user
    //var select = 'select p.codigo as "Codigo Producto" , p.nombre as "Nombre Producto",' + ' p.marca as "Marca", p.descripcion_corta as "Corta", p.descripcion_larga as "Larga", c.nombre as "Categoria", g.nombre as "Genero", s.nombre as "Talle", p.precio as "Precio", p.peso as "Peso", co.nombre as "Color", i.imagen as "Imagen" from products p , categories c, images i, sizes s, colors co, genders g where p.categoria = c.id and p.talle = s.id and p.color = co.id and p.image = i.id and p.genero = g.id and p.talle = s.id'
    var select = 'select p.codigo as "Codigo Producto" , p.nombre as "Nombre Producto", p.marca as "Marca", p.descripcion_corta as "Corta", p.descripcion_larga as "Larga", c.nombre as "Categoria", g.nombre as "Genero", s.nombre as "Talle", p.precio as "Precio", p.peso as "Peso", co.nombre as "Color", i.imagen as "Imagen" from products p , categories c, images i, sizes s, colors co, genders g where p.categoria = c.id and p.talle = s.id and p.color = co.id and p.image = i.id and p.genero = g.id and p.talle = s.id and ( (c.nombre like \'' + request +'\') or (co.nombre like \'' + request +'\') or (p.nombre like \'' + request +'\' ) or (p.marca like \'' + request +'\' ) or (p.descripcion_larga like \'' + request +'\' ))'
    products = await db.sequelize.query(select, {
    //replacements: {id: req.user.id},
    type: db.sequelize.QueryTypes.SELECT
    });  
    const data = {
      productos: products
    };
    return res.status(200).json(data)
    
  }

