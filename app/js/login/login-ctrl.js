angular.module( 'login', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.login', {
		url: '/login',
		templateUrl: 'login/login.tpl',
		controller: 'LoginCtrl',
	});

} ).controller( 'LoginCtrl', function($scope,LoginService,AppUtils,$state) {
	$scope.loginCtrl = {
		user:{}
	};

	$scope.submit =  function(Form){
		LoginService.login($scope.loginCtrl.user).success(function(result){
			if(result&&result.status == 200)
			{
				AppUtils.showToast(result.message);
				$state.go("dashBoard");
			}else{

			console.log(result);
			AppUtils.showToast(result.message);
		}

	});
	};

	

} );