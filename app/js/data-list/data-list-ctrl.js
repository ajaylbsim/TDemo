angular.module( 'data-list', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.data-list', {
		url: '/data-list',
		templateUrl: 'data-list/data-list.tpl',
		controller: 'DataListCtrl',
	});

} ).controller( 'DataListCtrl', function($scope,DataListService) {
	$scope.dataListCtrl = {
		dataset:{}
	};

	$scope.dataListCtrl.onPageClick = onPageClick;

	function onPageClick(pageNo){
		console.log(DataListService.getPaginatedData(pageNo,10));

		DataListService.getPaginatedData(pageNo,10).then(function(data) {
			//console.log("fdata on click");
			$scope.dataListCtrl.dataset = data;
		});


	}


} );