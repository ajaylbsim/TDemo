angular.module( 'item', [] ).config( function( $stateProvider) {
	$stateProvider.state( 'home.item', {
		url: '/item/:id',
		templateUrl: 'item-detail/item-detail.tpl',
		controller: 'ItemCtrl',
		resolve:{
			data:function(CartService,$stateParams){
				return CartService.findById($stateParams.id);
			}
		}
	} );
} ).controller( 'ItemCtrl', function( $scope,data,CartService,$state) {
	$scope.itemCtrl = {
		fruit:data.data
	};

	$scope.addToCart = addToCart;
	$scope.removeFromCart = removeFromCart;



	function addToCart(item){
		if(!CartService.findById(item.id)){
	//AppUtils.removeFromArrayByField(angular.copy($scope.listCtrl.fruits),"id",item);
	item.inCart =true;
	CartService.moveToCart(item);
}else{
	alert("Already added");
}
}

function removeFromCart(item){
	CartService.isPresent(item.id).success(function(res){
		if(res){
			CartService.removeFromCart(item.id).success(function(res){
				if(res){
					$state.go("home.list");
				}
				
			});
		}
	});

} 

});