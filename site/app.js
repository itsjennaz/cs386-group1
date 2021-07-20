const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');
const logger = require('morgan');

const monk = require('monk');
const database = monk('localhost:27017/alertx');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({'extended': false}));
app.use(express.static(path.join(__dirname, 'public')));

// make database accessible to the router
app.use(function(req, res, next) {
   req.database = database;
   next();
});

const indexRouter = require(path.join(__dirname, 'routes/index.js'));
app.use('/', indexRouter);

// necessary for ssl
let port = 443

https.createServer({
	key: fs.readFileSync('/root/ssl/colinwooddev.key'),
	cert: fs.readFileSync('/root/ssl/colinwood_dev.pem'),
}, app).listen(port)

module.exports = app;
