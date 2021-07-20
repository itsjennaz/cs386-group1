const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.redirect('/alertx');
});

router.get('/alertx', function(req, res) {
    res.render('home.ejs');
});

router.get('/alertx/products', function(req, res) {
    const database = req.database;
    const product_collection = database.get('products');

    product_collection.find({}, {}, function(e, docs) {
        res.render('products.ejs', { "products": docs } );
    });
});

router.get('/alertx/about-us', function(req, res) {
    res.render('about-us.ejs');
});

router.get('/alertx/products/playstation-5', function(req, res) {
    const database = req.database;
    const product_collection = database.get('products');

    product_collection.find({}, {}, function(e, docs) {
        res.render('templates/product-page.ejs', { "products": docs } );
    });
}

router.get('/alertx/products/geobook-120-minecraft-edition', function(req, res) {
    const database = req.database;
    const product_collection = database.get('products');

    product_collection.find({}, {}, function(e, docs) {
        res.render('templates/product-page.ejs', { "products": docs } );
    });
}

module.exports = router;
