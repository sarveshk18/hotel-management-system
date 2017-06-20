var express = require('express');
var vrindavan= express.Router();
var mongoose=require('mongoose'),
    assert=require('assert');
var Vrind=require('../models/vrind');


vrindavan.get('/', function(req, res, next) {
  if(req.session.user)
  {
	  var msg=req.session.user;
  //res.render('vrindavan',{msg:msg});
  
  
  //res.render('biryani',{msg:msg});
  
  
  
  
  
  
  
  
  
	var url = 'mongodb://127.0.0.1/hoteluser';
mongoose.connect(url);
var db=mongoose.connection;
	db.on('error',console.error.bind(console,'conection error:'));
	db.once('open',function(){
		console.log('connected correct');
		var dish='biryani';
        /*Vrind.find({dish:dish}).toArray(function(err,docs){
if(err) throw err
else
{
	console.log(docs);
		db.close();
		}
        
		});*/
		
		Vrind.find({dish:'biryani'})			//What's the correct callback synatax here?
		.exec(function(err,vrind){
			
		
		if(err) throw err;
		if(vrind){
			var x=0,c=0;
			vrind.forEach(function(item){
				x=x+item.rating;
				c=c+1;
			});
			x=x/c;
			x=x.toFixed(1);
			var dish='Veg Kolhapuri';
			Vrind.find({dish:'Veg Kolhapuri'})			//What's the correct callback synatax here?
		.exec(function(err,vrind){
			
		
		if(err) throw err;
		if(vrind){
			var y=0,c1=0;
			vrind.forEach(function(item){
				y=y+item.rating;
				c1=c1+1;
			});
			y=y/c1;
			y=y.toFixed(1);
			
			Vrind.find({dish:'Fried Rice'})			//What's the correct callback synatax here?
		.exec(function(err,vrind){
			
		
		if(err) throw err;
		if(vrind){
			var z=0,c2=0;
			vrind.forEach(function(item){
				z=z+item.rating;
				c2=c2+1;
			});
			z=z/c2;
			z=z.toFixed(1);
			console.log(y);
			res.render('vrindavan',{msg:msg,x:x,y:y,z:z});
			db.close();
		}
		else{
			
			db.close();
		}
		});
		}
		
		 });
		}
  
	});
		});
	}
  
  
  
  
  
  
  
  
  
  
  
  
  
  else
	  res.render('vrindavan',{msg:"",x:"",y:"",z:""});
});



module.exports = vrindavan;