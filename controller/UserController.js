

exports.login=function(req,res){
	var user = req.body;
	UserService.findOne(user.email)
	.on('error',function(err){
		res.send(err);
	})
	.on('data',function(result){
		if(bcrypt.compareSync(user.password, result.password)){
			var token = __jwt.sign({ email: result.email, iss: result.tenant}, "Tsecret");
			res.send({token:token});
		}else{
			res.send({status:false,code:200,message:"Invalid credential"});
		}
		
	})
}

exports.saveUser=function(req,res){
	var validationMsg = validate(req.body);
	if(validationMsg !=true){
		res.send({status:false,code:11000,message:validationMsg})	;
	}else{
		var user = getUser(req.body);
		user.password = getHash(req.body.password);
		UserService.createUser(user._id,user.name,user.email,user.gender,user.Dob,user.password)
		.on('error',function(err){
			if(err.code == 11000){
				res.send({status:false,code:11000,message:"Email already exits"})	;
			}else{
				res.send(err);
			}
		})
		.on('data',function(result){
			res.send(result);
		})
	}

	
}


exports.findAll = function(req,res){
	console.log("find All executed");
	UserService.findAll(req.user.tId)
	.on('error',function(err){
		res.send(err);
	})
	.on('data',function(result){
		res.send(result);
		
		
	})
}




function getUser(userRequestObj){
	var user = new User();
	user.email = userRequestObj.email;
	user.password = userRequestObj.password;
	user.gender = userRequestObj.gender;
	user.name = userRequestObj.name;
	user.Dob = userRequestObj.Dob;
	var ObjectId = require('mongoose').Types.ObjectId;
	var id=new ObjectId()
	user._id = id;
	return user;

}


function getHash(text){
	var hash = bcrypt.hashSync(text);
	return hash;
}

function validate(user){
	if(!user.tId) return "TennentId(tId) is mandatory";
	if(!user.password) return "Password is mandatory";
	else if(!user.email) return "Email is mandatory";
	else if(!user.name) return "Name is mandatory";
	else if(!user.gender) return "Gender is mandatory";
	else if(!user.Dob) return "Dob is mandatory";
	return true;
}