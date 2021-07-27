const express = require('express');
//const app = require('../app');
const app = express();
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/alertx');
});

router.get('/alertx', function(req, res) {
    res.render('home.ejs'); 
});

router.get('/alertx/products', function(req, res) {
    res.render('products.ejs');

    const database = req.database;
    const product_collection = database.get('products');

    product_collection.find({}, {}, function(e, docs) {
        res.render('products.ejs', { "products": docs } );
    });
});

router.get('/alertx/about-us', function(req, res) {
    res.render('about-us.ejs');
});



module.exports = router;


