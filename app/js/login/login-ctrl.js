angular.module( 'login', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.login', {
		url: '/login',
		templateUrl: 'login/login.tpl',
		controller: 'LoginCtrl',
	});

} ).controller( 'LoginCtrl', function($scope,LoginService) {
	$scope.loginCtrl = {
		user:{}
	};

	$scope.submit =  function(Form){
		LoginService.login($scope.loginCtrl.user).success(function(result){
			if(result)
			{
				console.log(result);
			}
		});
	};

	

} );