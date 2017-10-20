var mongoose = require('./mongoose');

var userSchema = new mongoose.Schema({

	username:{
		type:String,
		unique:true
	},
	code:String,
	confirmCode:String,
	email:{
		type:String,
		unique:true
	},
	phoneNumber:{
		type:Number,
		unique:true
	},
	usericon:{
		type:String,
		default:'nodeImg.jpg'
	},
	active:{
		type:Number,
		default:0,
	},
	golds:{
		type:Number,
		default:10
	},
	signature:{
		type:String,
		default:'这家伙很懒，什么也没有留下'

	},
	createAt:{
	type:Date,
	default:new Date()
 	}
},{versionKey:false});


var userModel = mongoose.model('userData',userSchema,'userData');



module.exports = userModel;





