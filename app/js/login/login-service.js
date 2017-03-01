angular.module('app').service('LoginService', ['$http','Constants', function($http,Constants){
	

	this.login=function(user){
		return $http.post(Constants.APP_URL+"login",user);
	};

}]);