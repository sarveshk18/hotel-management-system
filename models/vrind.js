var mongoose = require('mongoose');


// Connection URL


var Vrindschema=mongoose.Schema({
	dish:{
		type:String,
		index:true
	},
	username:{
		type:String
	},
	review:{
		type:String
	},
	rating:{
		type:Number
	}
});
var Vrind=mongoose.model('Vrind',Vrindschema);
module.exports=Vrind;

