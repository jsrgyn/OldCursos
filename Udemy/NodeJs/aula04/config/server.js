var express = require('express');
/*var msg = require('./mod_teste');*/
var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;