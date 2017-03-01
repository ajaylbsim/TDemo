angular.module( 'login', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.login', {
		url: '/login',
		templateUrl: 'login/login.tpl',
		controller: 'LoginCtrl',
	});

} ).controller( 'LoginCtrl', function($scope,DataListService) {
	$scope.loginCtrl = {
		dataset:{}
	};

} );