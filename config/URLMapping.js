var BaseURL = "/api/"
var controllers = {
	user: require(__appBaseDir+"/controller/UserController")

};




__app.get('/*', function(req, res) {
        res.sendfile(__appBaseDir+'/static/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });



__app.post(BaseURL+'login', validateRequest,function(req, res) {
	if((req.body.email == "demo@gmail.com")&&(req.body.password == "123")){

		res.send({status:200,message:"user succesfully loggedIn"});
	}else{
		res.send({status:401,message:"user credential is missing"});
	}
});


function validateRequest(req,res,next){
	if (req&&req.body) {
		next();
	}else{
		res.send({status:401,message:"Not a valid Request!"});
	}
}