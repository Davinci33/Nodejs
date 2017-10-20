
var userData = require('../config/mg_config');
var topicData = require('../config/topic_config');
var replyData = require('../config/reply_config')
var eventProxy = require('eventproxy');
var em = new eventProxy();
var topicObj = {


	getView:function(req,res){

		res.render('topic');
	},


	pubblishView:function(req,res){

		
	topicData.create(req.body,function(err,data){

			// console.log(err);
			var param = data._id;
			// console.log(data);

			res.redirect('/topic/'+param);
	})


			


	},	

detail:function(req,res){

		topicData.update({_id:req.params.id},{$inc:{viewNum:1}},function(err,data){
					// console.log('okkkkkkkkkkkk');
					em.emit('viewNum',data);
				if(err){console.log(err)}
				
				});
		topicData.find({_id:req.params.id}).populate('userId',{username:1,usericon:1,golds:1,signature:1}).exec(function(err,data){		

				replyData.find({topicId:req.params.id}).populate('userId',{username:1,usericon:1}).exec(function(err,info){
							em.emit('replydata',info);
				res.render('tpcdetail',{replydata:info,topicdata:data[0]});
				})
							// console.log(req.params.id);
				
				
			em.emit('topicdata',data[0]);
		});
			em.all('topicdata','replydata','viewNum',function(topicdata,replydata){
						// console.log(replydata);
			res.render('tpcdetail',{topicdata:topicdata,replydata:replydata});

				});

},



reply:function(req,res){



			console.log(req.body.topicId);
			console.log(req.body);


topicData.findOne({_id:req.body.topicId},{reply:1},function(err,rel){
		// 只是查reply 这数组
		// 我们操作,回复模型
			var data={
				// 回复的内容
				content:req.body.content,
				userId:req.session.user._id,
				topicId:req.body.topicId,
				floors:rel.reply.length+1
			};


replyData.create(data,function(err,info){
				// 数据库操作只有创建的返回值有用(数据库里面内容)
				if(err){console.log(err);return}

				// mongodb里面操作值为数组类型的键
				var newData={
					$push:{
						reply:info._id
					},
					// 永远覆盖上一次记录
					lastUser:req.session.user._id,
					lastTime:new Date()
				}
				// 将话题模型 reply更新
				topicData.update({_id:req.body.topicId},newData,function(err){
					if(err){console.log(err);return;};
				// console.log(info);
						var param = info.topicId
					res.redirect('/topic/'+param);
				})
			})
	})


}

// replyData.create(req.body,function(err,info){
		
// 		if(err){console.log(err);return;};
// 				// console.log(info);
// 				var param = info.topicId
// 			res.redirect('/topic/'+param);		

// });



// }

		

}



module.exports = topicObj;












