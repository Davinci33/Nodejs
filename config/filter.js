
var userCheck = function(req,res,next){

		// console.log(!req.session.user);

		if(!req.session.user){
			res.redirect('/users/login');
			return;
		}

		next();
}



module.exports = userCheck;

















