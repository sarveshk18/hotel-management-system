var express = require('express');
var signin= express.Router();
var mongoose=require('mongoose'),
    assert=require('assert');
var User=require('../models/user');




signin.get('/', function(req, res, next) {
  res.render('signin',{msg:''});

});

signin.post('/',function(req, res, next){
	var name=req.body.name;
    var username=req.body.username;
	var pass=req.body.password;
	var birthd=req.body.birthday;
	var email=req.body.email;
	var phone=req.body.phone;
	var addr=req.body.address;
	
	var url = 'mongodb://127.0.0.1/hoteluser';
mongoose.connect(url);
var db=mongoose.connection;
	db.on('error',console.error.bind(console,'conection error:'));
	db.once('open',function(){
		console.log('connected correctly');
	User.findOne({username:username})			//What's the correct callback synatax here?
		.exec(function(err,user){
			
		
		if(err) throw err;
		if(!user){
			User.findOne({email:email})			//What's the correct callback synatax here?
		.exec(function(err,user){
			
		
		if(err) throw err;
		if(!user){
			var newuser=new User({
		
		username:username,
		
	password:pass,
	name:name,
	birthdate:birthd,
	email:email,
	phone:phone,
	address:addr
	});
	
	
	newuser.save(function(err){
		if(err) throw err;
		console.log('user created');
		db.close();
		var mess='you are register succesfully and you can login';
		res.render('\login',{msg:mess});
	});
		}
		else{
			
			db.close();
			var mess='This email is already registered try another one';
		res.render('\signin',{msg:mess});
		}
        
		});
		}
		else{
			
			db.close();
			var mess='This username is already registered try another one';
		res.render('\signin',{msg:mess});
		}
        
		});
	
	
	
	
	
	
	});
	
		
});
    	

module.exports = signin;