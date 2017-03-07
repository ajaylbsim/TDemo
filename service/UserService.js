exports.findOne = function (email) {
	var emitter = this;
	User.findOne({"email": email},function (err, user) {
		if (err) emitter.emit("error", err);
		else emitter.emit("data", user)
	})

}.toEmitter();


exports.findAll = function (tId) {
	var emitter = this;
	User.find({},function (err, users) {
		if (err) emitter.emit("error", err);
		else {
			users = gerRequired(users);
			emitter.emit("data", users);
		}

	})

}.toEmitter();



exports.getUser = function (email) {
	var emitter = this;
	user.find({email: email}, function (err, user) {
		if (err) emitter.emit("error", err);
		else emitter.emit("data", user)
	})
}.toEmitter();

exports.createUser = function (id,name,email,gender,Dob,password,friends,profileImgId,coverImgId) {
	var emitter = this;
	var userObj = new User()
	userObj._id = id||"";
	userObj.name = name||"";
	userObj.email = email||"";
	userObj.gender = gender||"";
	userObj.password =  password;
	userObj.Dob = Dob;
	userObj.friends =friends;
	userObj.profileImgId =profileImgId;
	userObj.coverImgId =coverImgId;
	userObj.save(function (err, user) {
		if (err) emitter.emit("error", err);
		else emitter.emit("data", gerRequired([user]))
	});
}.toEmitter();



function gerRequired(users){
	if(!users) return [];

	for(var i =0;i<users.length;i++){
		users[i].meta = "";
		users[i].password = "";
	}
	return users;

}