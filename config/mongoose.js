var mongoose = require('mongoose');

var url = 'mongodb://127.0.0.1:27017/cnde_user';


mongoose.connect(url,function(err){

	if(err){
		console.log('数据库链接失败！');
	}else{
		console.log('数据库链接成功！');
	}
});



module.exports=mongoose;