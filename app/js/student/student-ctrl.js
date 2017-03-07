angular.module( 'student', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.student', {
		parent:'home',
		url: '/student',
		templateUrl: 'student/student.tpl',
		controller: 'StudentCtrl',
	});

} ).controller( 'StudentCtrl', function($scope,LoginService,AppUtils,$state) {
	$scope.studentListCtrl = {
		user:{}
	};

} );