var mongoose = require('./mongoose');

var topicSchema = new mongoose.Schema({

				tab:String,
				title:String,
				content:String,
				username:String,
				userId:{
					type:"ObjectId",
					ref:"userData"
				},
				createAt:{
					type:Date,
					default:Date.now
				},
				viewNum:{
					type:Number,
					default:0
				},
				
						
			reply:[{
			    type:"ObjectId"
			  }],
			  lastUser:{
			    type:'ObjectId',
			    ref:'userModel',
			    default:null
			  },
			  lastTime:{
			   type:Date,
			    default:null
			  }	
							
					

},{versionKey:false});




var topicModel = mongoose.model('topicData',topicSchema,'topicData');



module.exports = topicModel;


















