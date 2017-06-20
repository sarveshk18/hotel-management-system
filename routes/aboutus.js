var express = require('express');
var aboutus= express.Router();



aboutus.get('/', function(req, res, next) {
  if(req.session.user)
  {
	  var msg=req.session.user;
  res.render('aboutus',{msg:msg});
  }
  else
	  res.render('aboutus',{msg:""});
});



module.exports = aboutus;