var express = require('express');
var shotel= express.Router();



shotel.get('/', function(req, res, next) {
  if(req.session.user)
  {
	  var msg=req.session.user;
  res.render('shotel',{msg:msg});
  }
  else
	  res.render('shotel',{msg:""});
});



module.exports = shotel;