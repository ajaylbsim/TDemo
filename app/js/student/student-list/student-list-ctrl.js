angular.module( 'list', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.student.list', {
		parent:'home',
		url: '/list222',
		templateUrl: 'student/student.tpl',
		controller: 'StudentListCtrlv2',
	});

} ).controller( 'StudentListCtrlv2', function($scope) {
	$scope.studentListCtrlv2 = {
		user:{}
	};

	console.log("student list");

} );