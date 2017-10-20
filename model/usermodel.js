
var userData = require('../config/mg_config');
var send = require('../model/nodemailer');
var upFile = require('../config/upfile');
var topicData = require('../config/topic_config');
var transfer = require('../config/transfer');
var obj={

	reg:function(req,res){
		res.render('reg');
	},

	userReg:function(req,res){

		userData.findOne({$or:[{username:req.body.username},{email:req.body.email},{phoneNumber:req.body.phoneNumber}]},function(err,data){

				// console.log(data);

			if(data){

					if(req.body.username===data.username){
						req.flash("errMsg","用户名已存在！");
						res.redirect('/users/reg');
						return;
					}else{

						if(req.body.email===data.email){
						req.flash("errMsg","邮箱已被注册");
						res.redirect('/users/reg');
								return;
						}else{

							if(req.body.phoneNumber==data.phoneNumber);
						req.flash("errMsg","手机号已被使用");
						res.redirect('/users/reg');
								return;
						}
					}									
			}else{


				userData.create(req.body,function(err,data){
					
					req.flash("errMsg","注册成功！");
					// console.log(data);

					send(data.username,data._id,data.email);
					res.redirect('/users/reged');

				});
			}
		})

	},


actived:function(req,res){
// console.log(req.body.params);
	userData.update(req.body.params,{$set:{active:1}},function(err,data){

		console.log(err);
	})



	res.redirect('/users/login');		

},





reged:function(req,res){

		res.render('reged');


},


login:function(req,res){

	res.render('login');


},

logined:function(req,res){
				// console.log(transfer(req.body));
		userData.find(transfer(req.body),function(err,data){
					// console.log(data);
					if(data.length){
						if(data[0].code===req.body.code){
								req.session.user = data[0];
								var param = req.session.user._id;
								console.log(req.session.user._id);
								res.redirect('/index');
								return;
							}else{

								req.flash('errMsg','密码输入错误！');
								res.redirect('/users/login');
								return;
							};
					}else{

						req.flash('errMsg','用户名不存在或输入错误！');
						res.redirect('/users/login');
						return;

					};

		});

},


loginOut:function(req,res){
	req.session.user=null;

	res.redirect('/index');


},



index:function(req,res){



			console.log(req.query);

				if(req.query.tab==='ask'){
console.log('okkkkk111111')

						var us = {
						tab:req.query.tab
					};

		topicData.find(us).count(function(err,sumNum){				
				// console.log(req.query);
			// 取到转跳按钮的页数
		var page = req.query.page?req.query.page:1;
		// 每次显示的数据条数
		var pageSkip = 10;
		// 能转跳的最大次数
		var pageMax = Math.ceil(sumNum/pageSkip);
		// 过滤转跳页数（最大页数和最小页数）
		if(page<0){
			page=1;
		};
		if(page>=pageMax){
			page=pageMax;
		};

		// 每次转跳的数据间隔、
		var pageOffset = (page-1)*pageSkip


		topicData.find(us,{},{sort:{createAt:-1},skip:pageOffset,limit:pageSkip}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data,pageMax:pageMax,page:page*1,query:req.query.tab});		
	});





	});

				}else if(req.query.tab==='share'){
console.log('okkkkk222')
								var us = {
									tab:req.query.tab
								};
					topicData.find(us).count(function(err,sumNum){				
				// console.log(req.query);
			// 取到转跳按钮的页数
		var page = req.query.page?req.query.page:1;
		// 每次显示的数据条数
		var pageSkip = 10;
		// 能转跳的最大次数
		var pageMax = Math.ceil(sumNum/pageSkip);
		// 过滤转跳页数（最大页数和最小页数）
		if(page<0){
			page=1;
		};
		if(page>=pageMax){
			page=pageMax;
		};

		// 每次转跳的数据间隔、
		var pageOffset = (page-1)*pageSkip


		topicData.find(us,{},{sort:{createAt:-1},skip:pageOffset,limit:pageSkip}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data,pageMax:pageMax,page:page*1,query:req.query.tab});		
	});





	});

				}else if(req.query.tab==='job'){
					console.log('okkkkk333')
					var us = {
						tab:req.query.tab
					};

				topicData.find(us).count(function(err,sumNum){				
				// console.log(req.query);
			// 取到转跳按钮的页数
		var page = req.query.page?req.query.page:1;
		// 每次显示的数据条数
		var pageSkip = 10;
		// 能转跳的最大次数
		var pageMax = Math.ceil(sumNum/pageSkip);
		// 过滤转跳页数（最大页数和最小页数）
		if(page<0){
			page=1;
		};
		if(page>=pageMax){
			page=pageMax;
		};

		// 每次转跳的数据间隔、
		var pageOffset = (page-1)*pageSkip


		topicData.find(us,{},{sort:{createAt:-1},skip:pageOffset,limit:pageSkip}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data,pageMax:pageMax,page:page*1,query:req.query.tab});		
	});





	});
				}else if(req.query.tab==='dev'){
console.log('okkkkk44444');
										var us = {
												tab:req.query.tab
											};
					topicData.find(us).count(function(err,sumNum){				
				// console.log(req.query);
			// 取到转跳按钮的页数
		var page = req.query.page?req.query.page:1;
		// 每次显示的数据条数
		var pageSkip = 10;
		// 能转跳的最大次数
		var pageMax = Math.ceil(sumNum/pageSkip);
		// 过滤转跳页数（最大页数和最小页数）
		if(page<0){
			page=1;
		};
		if(page>=pageMax){
			page=pageMax;
		};

		// 每次转跳的数据间隔、
		var pageOffset = (page-1)*pageSkip


		topicData.find(us,{},{sort:{createAt:-1},skip:pageOffset,limit:pageSkip}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data,pageMax:pageMax,page:page*1,query:req.query.tab});		
	});





	});
				}else if(req.query.tab==='all'){

			topicData.find({}).count(function(err,sumNum){
				// console.log(req.query);
			// 取到转跳按钮的页数
		var page = req.query.page?req.query.page:1;
		// 每次显示的数据条数
		var pageSkip = 10;
		// 能转跳的最大次数
		var pageMax = Math.ceil(sumNum/pageSkip);
		// 过滤转跳页数（最大页数和最小页数）
		if(page<0){
			page=1;
		};
		if(page>=pageMax){
			page=pageMax;
		};

		// 每次转跳的数据间隔、
		var pageOffset = (page-1)*pageSkip


		topicData.find({},{},{sort:{createAt:-1},skip:pageOffset,limit:pageSkip}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data,pageMax:pageMax,page:page*1,query:req.query.tab});		
	});





	})


}else{

			console.log('okkkkk55555')
		topicData.find({}).count(function(err,sumNum){
				// console.log(req.query);
			// 取到转跳按钮的页数
			// 
		
		var page = req.query.page?req.query.page:1;
		// 每次显示的数据条数
		var pageSkip = 10;
		// 能转跳的最大次数
		var pageMax = Math.ceil(sumNum/pageSkip);
		// 过滤转跳页数（最大页数和最小页数）
		if(page<0){
			page=1;
		};
		if(page>=pageMax){
			page=pageMax;
		};

		// 每次转跳的数据间隔、
		var pageOffset = (page-1)*pageSkip

			console.log(page);
		topicData.find({},{},{sort:{createAt:-1},skip:pageOffset,limit:pageSkip}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data,pageMax:pageMax,page:page*1,query:req.query.tab});		
	});





	})



}





	







// req.session.user?req.session.user:req.session.user=null;
	
	

},



getIndex:function(req,res){
	
	topicData.find({}).populate('userId',{username:1,usericon:1}).exec(function(err,data){		
				// console.log(data);
			res.render('index',{topicdata:data});		
	})
	

},



settings:function(req,res){
	// console.log(req.session.user);

	res.render('settings');

},

settinged:function(req,res){

	

var upload=upFile("up_file","public/images");

	upload(req,res,function(err){
		

			if(err){

				switch(err.code){
					case "类型不匹配":
					res.send(err.code);
					return;
					break;
					case "LIMIT_FILE_SIZE":
					res.send("超出文件大小限制");
					return;
					break;
				}
			}



				if(req.file){
					console.log(req.file);
				
				userData.update({username:req.body.username},{usericon:req.file.filename},function(err){
					if(err){console.log(err);return}
					console.log("success");
					userData.findOne({username:req.body.username},function(err,data){
						req.session.user=data;
						// resizeImg("public/usericos/"+data.userIco,"public/usericos/"+data.userIco,width,height,callback)
						res.redirect("back");
						return;
						
					})
				})	
				
			}else{
				console.log(req.body.signature);
				userData.update({username:req.body.username},{signature:req.body.signature},function(err){
					if(err){console.log(err);return}
					console.log("success");
					userData.findOne({username:req.body.username},function(err,data){
						req.session.user=data;
						// console.log(data);
						res.redirect("back");
						return;
					
					})
					
				})
			}


})



},

fixCode:function(req,res){

	
	var change = req.session.user;

	
	console.log(req.session.user);

		if(req.body.old_pass===change.code){

		userData.update({_id:change._id},{$set:{code:req.body.new_pass}},function(err){
		req.flash('errMsg','密码修改成功');
		res.redirect('back');

			});
						
		}else{


				req.flash('errMsg','密码输入错误');
				res.redirect('back');
}


	


	
	



}







}

module.exports = obj;











