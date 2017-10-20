

var transfer = function (param){

userdata = param.username;
usercode = param.code;


var transferud = userdata.toString();

var transferuc = usercode.toString();


obj={

username:transferud,


code:transferuc

}
		



return obj;

}



module.exports = transfer;









