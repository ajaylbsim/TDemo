angular.module( 'cart', [] ).config( function( $stateProvider ) {
	$stateProvider.state( 'home.cart', {
		url: '/cart',
		templateUrl: 'cart/caert-tpl.tpl',
		controller: 'CartCtrl',
		resolve:{
			data:function(CartService){
				return CartService.getCart();
			}
		}
	} );
} ).controller( 'CartCtrl', function( $scope,CartService,AppUtils,data,$state) {
	console.log(data);
	$scope.cartCtrl = {
		fruits:data.data,
		cartItemCount:CartService.getCount(),
		imgPath:'http://lorempixel.com/60/60/'
	};

	$scope.removeFromCart= removeFromCart;


	function removeFromCart(item,index){
		CartService.removeFromCart(item.id).success(function(res){
			if(res){
				$scope.cartCtrl.fruits.splice(index,1);
				if($scope.cartCtrl.fruits.length>0){
					alert("removed successfully!!");
				}else{
					$state.go("home.list");
				}
			}
			
		});


	}

} );
