var express = require('express');
var frr= express.Router();
var mongoose=require('mongoose'),
    assert=require('assert');
var Vrind=require('../models/vrind');


frr.get('/', function(req, res, next) {
  if(req.session.user)
  {
	  var msg=req.session.user;
  //res.render('biryani',{msg:msg});
  
  
  
  
  
  
  
  
  
	var url = 'mongodb://127.0.0.1/hoteluser';
mongoose.connect(url);
var db=mongoose.connection;
	db.on('error',console.error.bind(console,'conection error:'));
	db.once('open',function(){
		console.log('connected correct');
		var dish='Fried Rice';
        /*Vrind.find({dish:dish}).toArray(function(err,docs){
if(err) throw err
else
{
	console.log(docs);
		db.close();
		}
        
		});*/
		
		Vrind.find({dish:'Fried Rice'})			//What's the correct callback synatax here?
		.exec(function(err,vrind){
			
		
		if(err) throw err;
		if(vrind){
			console.log(vrind[0].rating);
			res.render('frr',{msg:msg,vrind:vrind});
			db.close();
		}
		else{
			res.render('frr',{msg:msg,vrind:""});
			db.close();
		}
		 });
  
	});
  
  
  
  
  
  
  }
  else
	  res.render('frr',{msg:"",vrind:""});
});


















frr.post('/',function(req, res, next){
	var dish='Fried Rice';
    var username=req.session.user;
	var review=req.body.review;
	var rating=req.body.rate;
	
	var url = 'mongodb://127.0.0.1/hoteluser';
mongoose.connect(url);
var db=mongoose.connection;
	db.on('error',console.error.bind(console,'conection error:'));
	db.once('open',function(){
		console.log('connected correctly');
	
		
			var newrev=new Vrind({
		dish:dish,
		username:username,
		
	review:review,
	rating:rating,
	});
	
	
	newrev.save(function(err){
		if(err) throw err;
		console.log('review created');
		db.close();
		
  res.redirect('/frr');
	});
	});
		
        
		});
    	

module.exports = frr;