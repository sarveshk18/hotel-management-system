var mongoose = require('mongoose');


// Connection URL


var Userschema=mongoose.Schema({
	username:{
		type:String,
		index:true
	},
	password:{
		type:String
	},
	name:{
		type:String
	},
	birthdate:{
		type:String
	},
	email:{
		type:String
	},
	phone:{
		type:Number
	},
	address:{
		type:String
	}
});
var User=mongoose.model('User',Userschema);
module.exports=User;

