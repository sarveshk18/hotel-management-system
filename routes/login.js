var express = require('express');
var login= express.Router();
var mongoose=require('mongoose'),
    assert=require('assert');
var User=require('../models/user');


login.get('/', function(req, res, next) {
  res.render('login',{msg:''});
});

login.post('/',function(req,res,next){
	var username=req.body.username;
	var pass=req.body.password;
	var url = 'mongodb://127.0.0.1/hoteluser';
mongoose.connect(url);
var db=mongoose.connection;
	db.on('error',console.error.bind(console,'conection error:'));
	db.once('open',function(){
		console.log('connected correct');
        User.findOne({username:username,password:pass})			//What's the correct callback synatax here?
		.exec(function(err,user){
			
		
		if(err) throw err;
		if(!user){
			var mess='your username or password is not valid';
			res.render('\login',{msg:mess});
			db.close();
		}
		else{
			req.session.user = username;
			res.redirect('\mainpage');
			//var mess='success';
			//res.render('\mainpage',{msg:mess});
			db.close();
		}
        
		});
		 });
});


module.exports = login;