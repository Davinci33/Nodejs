var mongoose = require('./mongoose');


var replySchema = new mongoose.Schema({

			


			content:String,

			createAt:{
		    type:Date,
		    default:Date.now
 			 },
 	 		userId:{
  			type:"ObjectId",
  			ref:"userData"
 			 },

			topicId:{
			type:'ObjectId',
			ref:'topicData'
			},
			floors:{
			type:Number,
			default:1
				}



},{versionKey:false});

var replyModel = mongoose.model('replyData',replySchema,'replyData');


module.exports = replyModel;




















