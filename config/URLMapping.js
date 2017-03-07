var BaseURL = "/api/"
var controllers = {
	user: require(__appBaseDir+"/controller/UserController")

};




var jwt = require('express-jwt');
 
var secretCallback = function(req, payload, done){
 done(null, "Tsecret");
/*  UserService.findOne(issuer, function(err, tenant){
    if (err) { return done(err); }
    if (!tenant) { return done(new Error('missing_secret')); }
 
   // var secret = utilities.decrypt(tenant.secret);
    done(null, "ajay");
  });*/
};


__app.get('/*', function(req, res) {
        res.sendfile(__appBaseDir+'/static/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });




__app.post(BaseURL+'login/', validateRequest,controllers.user.login);
__app.post(BaseURL+'user/', validateRequest,controllers.user.saveUser);

__app.get(BaseURL+'user/all',jwt({secret: secretCallback}),validateRequest,controllers.user.findAll);







function validateRequest(req,res,next){
	if (req&&req.body) {
		next();
	}else{
		res.send({status:401,message:"Not a valid Request!"});
	}
}


