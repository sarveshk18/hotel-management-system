var express = require('express');
var login= express.Router();

login.get('/', function(req, res, next) {
  express.static('login');
  next();
})

login.get('/', function(req, res, next) {
  res.render('login');
});



module.exports = login;